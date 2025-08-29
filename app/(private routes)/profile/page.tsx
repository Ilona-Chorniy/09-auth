import Link from 'next/link'
import Image from 'next/image'
import css from './ProfilePage.module.css'
import { Metadata } from 'next'
import { getServerMe } from '@/lib/api/serverApi'

export async function generateMetadata(): Promise<Metadata> {
  const user = await getServerMe()
  return {
    title: `User: ${user.username} | NoteHub`,
    description: `Profile page of ${user.username} in NoteHub app`,
    openGraph: {
      title: `NoteHub Profile: ${user.username}`,
      description: `Check ${user.username}'s profile on NoteHub`,
        url: 'https://09-auth-phi-teal.vercel.app',
      images: [
        {
          url: user.avatar || 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'User Profile Image',
        },
      ],
    },
  }
}

const ProfilePage = async () => {
  const user = await getServerMe()

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>My Profile</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit
          </Link>
        </div>

        <div className={css.avatarWrapper}>
          <Image
            src={user.avatar || '/avatar.png'}
            alt={`${user.username} Avatar`}
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>

        <div className={css.profileInfo}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
