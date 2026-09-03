import { NextResponse } from 'next/server'
import { getProjects } from '@/lib/projects'

export async function GET() {
  try {
    return NextResponse.json({ projects: await getProjects() })
  } catch (error) {
    console.error('Erreur lors de la lecture des projets :', error)
    return NextResponse.json({ projects: [] }, { status: 500 })
  }
}
