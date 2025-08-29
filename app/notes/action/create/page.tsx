import css from './CreateNote.module.css'
import NoteForm from '@/components/NoteForm/NoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Create Note",
    description: "Page for creating a new note",
    openGraph: {
        title: "Create Note",
        description: "Page for creating a new note",
        url: "https://08-zustand-smoky.vercel.app/notes/action/create",
        images: [
            {
                url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                alt: "Create note page preview", 
                width: 1200,
                height: 630,
            }
        ]
    }
}

export default function CreateNote() {
    return (
        <main className={css.main}>
            <div className={css.container}>
                <h1 className={css.title}>Create note</h1>
                <NoteForm />
            </div>
        </main>
    )
}
