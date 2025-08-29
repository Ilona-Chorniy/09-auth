import { NoteTag } from '@/types/note';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface NoteDraft {
    title: string;
    content: string;
    tag: NoteTag;
}

type NoteStore = {
    draft: NoteDraft;
    setDraft: (note: NoteDraft) => void;
    clearDraft: () => void;
};

const initialDraft: NoteDraft = {
    title: '',
    content: '',
    tag: 'Todo',
};

export const useNoteStore = create<NoteStore>()(
        persist(
    (set) => ({
        draft: initialDraft,
        setDraft: (note) => set({ draft: note }),
        clearDraft: () => set({ draft: initialDraft }),
    }),
    { name: 'note-draft' } 
    )
);
