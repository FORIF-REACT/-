import TopRank from '@/components/Rank/TopRank';
import RankBox from '@/components/Rank/RankBox';
import { GiCrenelCrown } from "react-icons/gi";

function MentorRank() {
  return (
    
    <div className='w-full h-auto flex items-center'>
      <div className='w-page h-auto max-w-[720px] mx-auto'>
        <div className='w-full max-w-[720px] mx-auto'>
          <div className='mt-24 py-8'>
            <h1 className="text-36 font-sans font-semibold text-[#000000] leading-[50px] tracking-[-0.007em]">
                멘토 랭킹
            </h1>

            <div className='mt-8 flex justify-between h-auto'>

              <div className='flex flex-col items-center mt-11'>
                <GiCrenelCrown  size={85} className="text-silver"/>
                <div className='flex flex-col items-center py-10 w-[200px] box-border border-2 rounded-2xl shadow-md shadow-silver h-[260px] border-silver'>
                  <TopRank username={"이기정"} point={1900} imagesize={16}  />
                  <p className='text-20 pt-8'>1900P</p>
                </div>
              </div>


              <div className='flex flex-col items-center'>
                <GiCrenelCrown  size={100} className="text-gold"/>
                <div className='flex flex-col items-center py-10 w-[200px] box-border border-2 rounded-2xl shadow-md shadow-gold h-[290px] border-gold'>
                  <TopRank username={"일기정"} point={2000} imagesize={20}  />
                  <p className='text-20 pt-8'>2000P</p>
                </div>
              </div>

              <div className='flex flex-col items-center mt-11'>
                <GiCrenelCrown  size={85} className="text-bronze"/>
                <div className='flex flex-col items-center py-10 w-[200px] box-border border-2 rounded-2xl shadow-md shadow-bronze h-[260px] border-bronze'>
                  <TopRank username={"삼기정"} point={1800} imagesize={16}  />
                  <p className='text-20 pt-8'>1800P</p>
                </div>
              </div>

              
            </div>

            <div className="mt-8 flex flex-col gap-5">
                <RankBox rank={4} point={1500} name="박기정" tier="플레티넘" />
                <RankBox rank={5} point={1200} name="김기정" tier="골드" />
                <RankBox rank={6} point={1100} name="최기정" tier="골드" />
                <RankBox rank={7} point={1000} name="유기정" tier="실버" />
                <RankBox rank={8} point={800} name="팔기정" tier="실버" />
                <RankBox rank={9} point={600} name="구기정" tier="브론즈" />
                <RankBox rank={10} point={500} name="십기정" tier="브론즈" />
            </div>


          </div>

          <div className='mt-12'></div>
        </div>
      </div>
    </div>
  );
}

export default MentorRank;
