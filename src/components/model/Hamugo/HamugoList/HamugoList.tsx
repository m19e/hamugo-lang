import Image from "next/image"
import { VFC } from "react"

import { HamugoProps, HamugoListProps } from "@/types/Hamugo"

const HamugoListItem: VFC<HamugoProps> = ({ hamugo }) => {
  return (
    <div className="w-full max-w-md shadow-lg card bg-base-200">
      <div className="card-body">
        <div className="flex gap-2 items-center font-black">
          <Image
            src="https://twemoji.maxcdn.com/v/latest/svg/1f439.svg"
            alt="hamster"
            width={36}
            height={36}
          />
          <a href={hamugo.url} target="_blank" rel="noreferrer">
            <div className="font-black text-responsive-md zen-maru-gothic btn btn-primary btn-sm text-primary-content">
              <h2>{hamugo.word}</h2>
            </div>
          </a>
          <div className="inline-flex grow justify-end font-black text-responsive-sm text-accent">
            <span className="hidden sm:inline-flex">ヒント：</span>
            {hamugo.hint}
          </div>
        </div>
        <a href={hamugo.url} target="_blank" rel="noreferrer">
          <div className="card-actions">
            <div className="w-full btn btn-secondary btn-sm">
              <p className="font-black text-right zen-maru-gothic text-responsive-base text-secondary-content">
                いみ：「{hamugo.meaning}」
              </p>
            </div>
          </div>
        </a>
        <div className="mt-4">
          <p className="text-responsive-base">{hamugo.example}</p>
        </div>
      </div>
    </div>
  )
}

export const HamugoList: VFC<HamugoListProps> = ({ hamugos }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
      {hamugos.map((h) => (
        <HamugoListItem key={h.word} hamugo={h} />
      ))}
    </div>
  )
}
