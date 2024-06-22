import * as React from 'react';
import Box from '@/components/Rank/ThreeRankBox';
import RankBox from '@/components/Rank/RankBox';

function MentorRank() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="relative w-[1100px] h-[1200px]">
        <div className="absolute w-[176px] h-[50px] left-[194px] top-[130px]">
          <h1 className="text-36 font-semibold text-[#000000] leading-[50px] tracking-[-0.007em]">
            멘토 랭킹
          </h1>
        </div>
        <div className="absolute left-[194px] top-[240px]">
          <Box
            rank={2}
            color="#D0D0D0"
            width={200}
            height={327}
            boxHeight={250}
            point={30000}
            name="이등기정"
            tier="플레티넘"
          />
        </div>
        <div className="absolute left-[706px] top-[240px]">
          <Box
            rank={3}
            color="#E6BA8F"
            width={200}
            height={327}
            boxHeight={250}
            point={2999}
            name="삼등기정"
            tier="플레티넘"
          />
        </div>
        <div className="absolute left-[435px] top-[184px]">
          <Box
            rank={1}
            color="#F4E075"
            width={230}
            height={383}
            boxHeight={280}
            point={2888}
            name="일등기정"
            tier="플레티넘"
          />
        </div>

        <div className="absolute left-[194px] top-[621px] flex flex-col gap-5">
          <RankBox rank={4} point={1500} name="박기정" tier="플레티넘" />
          <RankBox rank={5} point={1200} name="김기정" tier="골드" />
          <RankBox rank={6} point={1100} name="최기정" tier="골드" />
          <RankBox rank={7} point={1000} name="유기정" tier="실버" />
          <RankBox rank={8} point={800} name="팔기정" tier="실버" />
          <RankBox rank={9} point={600} name="구기정" tier="브론즈" />
          <RankBox rank={10} point={500} name="십기정" tier="브론즈" />
        </div>
        

      </div>
    </div>
  );
}

export default MentorRank;
