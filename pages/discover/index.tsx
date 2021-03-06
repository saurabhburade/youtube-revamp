import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import VideoCard from '../../components/VideoCard/VideoCard'

type Props = {}

export default function index({ }: Props) {
      const [videosData, setvideosData] = useState([])
      useEffect(() => {
        const fetchVideos = async () => {
          const res = await axios.get(
            'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&maxResults=50&chart=mostPopular&videoCategoryId=28&key=' +
              process.env.NEXT_PUBLIC_YT_API_KEY
          )
          setvideosData(res.data.items)
        }
        fetchVideos()
      }, [])
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/005-trending-topic.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">Trending</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/006-musical-notes.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">Music</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/004-cinema.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">Films</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/007-live.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">Live</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/003-console.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">Gaming</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/002-newspaper.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">News</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/009-soccer.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">Sports</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/001-lesson.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">Learning</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-5 m-2 rounded-lg shadow cursor-pointer w-52 bg-slate-50 hover:bg-blue-50">
          <img
            src="/images/discover/010-eco-friendly.png"
            width={50}
            height={50}
            alt=""
          />
          <p className="my-3 font-semibold">Fashion</p>
        </div>
        <div className="flex flex-wrap items-center mt-6 sm:w-full">
          {videosData?.length
            ? videosData.map((item: any) => {
                return <VideoCard item={item} key={item?.id} />
              })
            : new Array(10)?.fill(0)?.map((v, idx) => {
                return (
                  <div className="relative top-0 w-64 m-5 border shadow rounded-2xl">
                    <div className="animate-pulse">
                      <div className="flex-1 space-y-1">
                        <div className="rounded h-44 bg-slate-700"></div>
                        <div className="absolute bottom-0 w-full p-5 text-ellipsis bg-white/10 text-gray-50 backdrop-blur-sm">
                          <p className="overflow-hidden text-sm truncate">
                            <div className="h-8 rounded bg-slate-700"></div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
    </Layout>
  )
}
