'use client'

import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import type { TeamMember } from '@/lib/constants'

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Photo */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden mb-6 ring-1 ring-[var(--border-default)] group-hover:ring-[var(--blue-primary)]/30 transition-all duration-300">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          sizes="160px"
        />
      </div>

      {/* Info */}
      <h3 className="text-lg font-medium">{member.name}</h3>
      <p className="text-sm text-[var(--blue-primary)] font-medium mt-1">{member.role}</p>
      <p className="text-sm text-[var(--text-secondary)] mt-3 max-w-xs leading-relaxed font-light">
        {member.bio}
      </p>

      {/* LinkedIn */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] hover:text-[var(--blue-primary)] transition-colors"
        >
          <Linkedin className="size-3.5" />
          LinkedIn
        </a>
      )}
    </div>
  )
}
