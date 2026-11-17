import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile('src/data/services.ts', 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } })
const exports = {}
new Function('exports', outputText)(exports)
const services = exports.servicesData
const scan = services['scan-3d']
const lion = scan.inlineVisuals.find(v => v.afterSection === 0)
const serpent = scan.inlineVisuals.find(v => v.afterSection === 1)
assert.equal(lion.position, 'right')
assert.equal(lion.visualSize, 'compact')
assert.match(lion.image.src, /lion/)
assert.equal(lion.image.fit, 'contain')
assert.equal(serpent.layout, 'stacked')
assert.equal(serpent.image.aspect, 'panoramic')
assert.match(serpent.image.src, /serpent/)
assert.equal(scan.contentSections[1].layout, 'wide')
assert(services['modelisation-3d'].contentSections.slice(1).every(s => s.layout === 'wide'))
assert.equal(services['impression-3d-resine'].inlineVisuals[0].visualSize, 'compact')
assert.equal(services['impression-3d-metal'].inlineVisuals[1].layout, 'stacked')
assert.equal(services['impression-3d-metal'].inlineVisuals[1].image.aspect, 'landscape')
const series = services['impression-3d-en-serie'].contentSections
assert.equal(series.length, 4)
assert.equal(series[3].layout, 'wide')
assert.match(series[3].title, /Technologies, matériaux et finitions/)
assert.equal(services.electronique.inlineVisuals[0].position, 'left')
const template = await readFile('src/components/templates/ServicePage.tsx', 'utf8')
assert.match(template, /w-full min-w-0.*visual.position/s, 'Les visuels doivent garder une largeur explicite, même avec un alignement dans une grille.')
console.log('Dispositions des services vérifiées : lion, serpent, textes, résine, métal, série et électronique.')
