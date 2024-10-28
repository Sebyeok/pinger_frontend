import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

import ListModal from "./_ListModal";

import Svg from "@/components/Svg";
import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

const resultData = {
  정재형: {
    isdiseaseTextWhite: true,
    ktas: {
      stage: 4,
      tailwind: {
        bgColor: "bg-ktas4",
        position: "right-[calc(75%-9rem)]",
        width: "w-[75%]",
        gradient: "from-[#39876E] to-[#68CAAB]",
      },
    },
    disease: [
      {
        name: "빈혈",
        percentage: 40,
        department: "내과",
      },
      {
        name: "편두통",
        percentage: 25,
        department: "신경과",
      },
      {
        name: "전정 신경염",
        percentage: 14,
        department: "이비인후과",
      },
      {
        name: "저혈압",
        percentage: 7,
        department: "혈압내과",
      },
    ],
    recommendedAction: [
      {
        title: "생활 환경 조정",
        desc: "조용하고 편안한 환경에서 휴식을 취하며, 편두통이나 전정 신경염 증상이 나타날 경우 외부 자극(소음, 밝은 빛)을 피합니다.",
      },
      {
        title: "생활 습관 개선",
        desc: "철분이 풍부한 음식 섭취, 충분한 수면과 스트레스 관리로 전반적인 건강을 향상시킵니다.",
      },
      {
        title: "자연 요법 활용",
        desc: "편두통 완화를 위해 찬 찜질이나 따뜻한 목욕, 전정 신경염 관리를 위해 가벼운 운동과 균형 훈련을 시도합니다.",
      },
    ],
  },
  이윤정: {
    isdiseaseTextWhite: false,
    ktas: {
      stage: 3,
      tailwind: {
        bgColor: "bg-ktas3",
        position: "right-[calc(46%-9rem)]",
        width: "w-[46%]",
        gradient: "from-[#F2C40F] to-[#F9DD71]",
      },
    },
    disease: [
      {
        name: "열화상",
        percentage: 60,
        department: "이비인후과",
      },
      {
        name: "2도화상",
        percentage: 25,
        department: "심장내과 (순환기내과)",
      },
      {
        name: "열적외상",
        percentage: 14,
        department: "이비인후과",
      },
      {
        name: "감염",
        percentage: 7,
        department: "감염내과",
      },
    ],
    recommendedAction: [
      {
        title: "식습관 개선",
        desc: "기름진 음식, 매운 음식, 카페인 및 알코올을 피하고,\n소량씩 자주 식사를 하는 것이 좋습니다. 특히 자기 전에\n식사하는 것을 피하세요.",
      },
      {
        title: "자세 교정",
        desc: "식사 후 바로 눕지 말고, 최소 2-3시간 후에 눕는 것이\n좋습니다. 또한, 자는 동안 상체를 약간 높인 자세로 숙면을\n취하는 것도 도움이 됩니다.",
      },
      {
        title: "약물 치료",
        desc: "의사와 상담하여 위산 억제제, 제산제를 처방받아 복용하세요. 이 약물은 위산 역류를 줄이는 데 도움을 줄 수 있습니다.",
      },
    ],
  },
  정진아: {
    isdiseaseTextWhite: true,
    ktas: {
      stage: 2,
      tailwind: {
        bgColor: "bg-ktas2",
        position: "right-[calc(30%-9rem)]",
        width: "w-[30%]",
        gradient: "from-[#EF6F3A] to-[#FDB293]",
      },
    },
    disease: [
      {
        name: "아나필락시스",
        percentage: 60,
        department: "응급의학과 또는 알레르기 내과",
      },
      {
        name: "알레르기성 천식",
        percentage: 20,
        department: "호흡기내과 또는 알레르기 내과",
      },
      {
        name: "알레르기성 두드러기",
        percentage: 14,
        department: "응급의학과 또는 외과",
      },
      {
        name: "혈관 부종",
        percentage: 7,
        department: "이비인후과",
      },
    ],
    recommendedAction: [
      {
        title: "식습관 개선",
        desc: "기름진 음식, 매운 음식, 카페인 및 알코올을 피하고,\n소량씩 자주 식사를 하는 것이 좋습니다. 특히 자기 전에\n식사하는 것을 피하세요.",
      },
      {
        title: "자세 교정",
        desc: "식사 후 바로 눕지 말고, 최소 2-3시간 후에 눕는 것이\n좋습니다. 또한, 자는 동안 상체를 약간 높인 자세로 숙면을\n취하는 것도 도움이 됩니다.",
      },
      {
        title: "약물 치료",
        desc: "의사와 상담하여 위산 억제제, 제산제를 처방받아 복용하세요. 이 약물은 위산 역류를 줄이는 데 도움을 줄 수 있습니다.",
      },
    ],
  },
  정우철: {
    isdiseaseTextWhite: true,
    ktas: {
      stage: 2,
      tailwind: {
        bgColor: "bg-ktas2",
        position: "right-[calc(32%-9rem)]",
        width: "w-[32%]",
        gradient: "from-[#EF6F3A] to-[#FDB293]",
      },
    },
    disease: [
      {
        name: "간염",
        percentage: 40,
        department: "소화기내과 또는 감염내과",
      },
      {
        name: "간경변",
        percentage: 25,
        department: "소화기내과",
      },
      {
        name: "담도폐쇄",
        percentage: 60,
        department: "소화기내과 또는 외과",
      },
      {
        name: "췌장염",
        percentage: 7,
        department: "이비인후과",
      },
    ],
    recommendedAction: [
      {
        title: "의료기관 방문",
        desc: "증상이 심각하고 잠재적으로 위험한 상태일 수 있으므로 가까운 병의원 혹은 응급실을 방문해야합니다.",
      },
      {
        title: "상태 모니터링",
        desc: "의료기관 방문 전 증상을 모니터링하여, 통증의 변화, 구토의 양과 색깔, 기력 저하 정도 등을 기록합니다.",
      },
      {
        title: "약물 복용 중단",
        desc: "현재 복용 중인 약물이 있다면 의료진에게 알리고, 특히 간에 영향을 줄 수 있는 약물은 자가 판단으로 중단하지 않도록 합니다.",
      },
    ],
  },
};

export default function PingerCheckResult() {
  const navigate = useCustomNavigate();
  const location = useLocation();
  const name = location.state.data.name;
  const data = useMemo(() => resultData[name as "정재형" | "이윤정"], [name]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="mainContainer relative flex h-full w-full flex-col overflow-visible bg-gray-100 pb-[193rem]">
      <div className={tw("flex w-full flex-col overflow-y-scroll pb-[143rem]")}>
        <div className={tw("mt-[10rem] pl-[22rem] pr-[29rem]")}>
          <div className={tw("relative flex h-full w-full flex-col")}>
            <div className={tw("ml-[7rem] ts-26-semibold-177")}>{name}님의</div>
            <div className={tw("flex items-center gap-[7rem]")}>
              <div
                className={tw(
                  "flex h-[35rem] w-[150rem] items-center justify-center rounded-full border-[1rem] border-solid border-navy-100 bg-opacity-20 transition-colors ts-16-bold-120"
                )}
              >
                PINGER
                <div className={tw("text-navy-100 transition-colors ts-16-medium-120")}>-CHECK</div>
              </div>
              <div className={tw("ts-26-semibold-177")}>분석 결과입니다.</div>
            </div>
            <button
              onClick={() => navigate("/", "fade", { state: location.state })}
              className={tw("absolute right-0 top-[4rem] h-[25rem] w-[32rem] text-gray-600 ts-18-medium")}
            >
              확인
            </button>
          </div>
        </div>
        <div className={tw("mt-[14rem] px-[19rem]")}>
          <div
            className={tw(
              "w-full overflow-hidden rounded-[14rem] border-[1rem] border-solid border-navy-100 bg-white shadow-resultBox"
            )}
          >
            <div className={tw(data.ktas.tailwind.bgColor, "h-[14rem] w-full")} />
            <div className={tw("mb-[32rem] mt-[18rem] px-[9rem]")}>
              <div className={tw("w-full px-[11rem]")}>
                <div className={tw("flex justify-between")}>
                  <div className={tw("text-gray-500 ts-16-semibold")}>긴급도</div>
                  <button className="flex gap-[4rem]">
                    <div className={tw("h-[5rem] w-[5rem] rounded-full bg-gray-600")} />
                    <div className={tw("h-[5rem] w-[5rem] rounded-full bg-gray-600")} />
                    <div className={tw("h-[5rem] w-[5rem] rounded-full bg-gray-600")} />
                  </button>
                </div>
                <div className={tw("flex items-center justify-between")}>
                  <div className={tw("flex h-[37rem] items-end gap-[5rem]")}>
                    <div className={tw("ts-24-semibold")}>LEVEL.</div>
                    <div className={tw("text-[34rem] font-extrabold leading-[42rem]")}>{data.ktas.stage}</div>
                  </div>
                  <button className={tw("flex items-center gap-[7rem]")}>
                    <div className={tw("flex gap-[7rem]")}>
                      <div className={tw("h-[15.16rem] w-[7.76rem] rounded-full bg-ktas5")}></div>
                      <div className={tw("h-[15.16rem] w-[7.76rem] rounded-full bg-ktas4")}></div>
                      <div className={tw("h-[15.16rem] w-[7.76rem] rounded-full bg-ktas3")}></div>
                      <div className={tw("h-[15.16rem] w-[7.76rem] rounded-full bg-ktas2")}></div>
                      <div className={tw("h-[15.16rem] w-[7.76rem] rounded-full bg-ktas1")}></div>
                    </div>
                    <Svg iconName="upRightIcon" className="h-[13rem] w-[13rem] stroke-black" />
                  </button>
                </div>
                <div className={tw("relative mt-[9rem] flex h-[18rem] w-full items-center")}>
                  <div className={tw(data.ktas.tailwind.bgColor, "h-[10rem] w-full rounded-full")} />
                  <div
                    className={tw(data.ktas.tailwind.width, "absolute right-0 h-[10rem] rounded-r-full bg-gray-200")}
                  ></div>
                  <div className={tw("absolute flex w-full justify-between")}>
                    <div />
                    <div className={tw("h-[10rem] w-[4rem] bg-white")} />
                    <div className={tw("h-[10rem] w-[4rem] bg-white")} />
                    <div className={tw("h-[10rem] w-[4rem] bg-white")} />
                    <div className={tw("h-[10rem] w-[4rem] bg-white")} />
                    <div />
                  </div>
                  <div
                    className={tw(
                      data.ktas.tailwind.bgColor,
                      data.ktas.tailwind.position,
                      "absolute flex h-[18rem] w-[18rem] items-center justify-center rounded-full shadow-resultKtasLevelCircle"
                    )}
                  >
                    <div className={tw("h-[8rem] w-[8rem] rounded-full bg-white")} />
                  </div>
                </div>
                <div className={tw("mt-[14rem] whitespace-pre-line ts-14-medium")}>
                  {"즉각적인 치료가 필요할 수 있는 단계입니다.\n빠른 시일 내 가까운 의료기관 방문을 권장드립니다."}
                </div>
              </div>
              <div
                className={tw(
                  "mt-[20rem] flex w-full flex-col items-center rounded-[12rem] border-[1rem] border-solid border-gray-300 bg-gray-100 p-[11rem] text-gray-100"
                )}
              >
                <div className={tw("flex w-full justify-between")}>
                  <div className={tw("ts-17-extrabold")}>증상과 유사한 질병</div>
                  <div className={tw("flex items-center gap-[8rem]")}>
                    <div className={tw("ts-14-medium")}>기저질환</div>
                    <div
                      className={tw(
                        "flex h-[15.56rem] w-[35rem] items-center justify-end rounded-full bg-black pr-[1.94rem]"
                      )}
                    >
                      <div className={tw("h-[11.67rem] w-[11.67rem] rounded-full bg-white")} />
                    </div>
                  </div>
                </div>
                <div className={tw("relative mt-[19rem] h-[226rem] w-[282rem]")}>
                  <div
                    className={tw(
                      data.ktas.tailwind.gradient,
                      "absolute left-0 top-[73.6rem] flex h-[140rem] w-[140rem] flex-col items-center justify-center rounded-full border-[1rem] border-solid border-white bg-gradient-to-b"
                    )}
                  >
                    <div className={tw(data.isdiseaseTextWhite ? "text-white" : "", "mt-[12rem] ts-16-bold")}>
                      {data.disease[0].name}
                    </div>
                    <div className={tw(data.isdiseaseTextWhite ? "text-white" : "text-gray-600", "ts-16-regular")}>
                      {data.disease[0].percentage}%
                    </div>
                  </div>
                  <div
                    className={tw(
                      "absolute left-[114rem] flex h-[93rem] w-[93rem] flex-col items-center justify-center rounded-full bg-gray-600"
                    )}
                  >
                    <div className={tw("mt-[12rem] w-[90%] text-center text-white ts-16-semibold")}>
                      {data.disease[1].name}
                    </div>
                    <div className={tw("text-gray-300 ts-14-regular")}>{data.disease[1].percentage}%</div>
                  </div>

                  <div
                    className={tw(
                      "absolute right-0 top-[78.7rem] flex h-[88rem] w-[88rem] items-center justify-center rounded-full bg-gray-400 px-[3%] text-center ts-16-semibold"
                    )}
                  >
                    {data.disease[2].name}
                  </div>
                  <div
                    className={tw(
                      "absolute bottom-0 right-[63rem] flex h-[64rem] w-[64rem] items-center justify-center rounded-full bg-gray-300 ts-13-semibold"
                    )}
                  >
                    {data.disease[3].name}
                  </div>
                </div>
                <div className={tw("mt-[19rem] flex w-full flex-col gap-[14rem]")}>
                  {data.disease.slice(0, 3).map((item) => (
                    <div key={item.name} className={tw("flex w-full justify-between")}>
                      <div className={tw("ts-17-semibold")}>{item.name}</div>
                      <div className={tw("flex items-center gap-[8rem]")}>
                        <div className={tw("text-gray-600 ts-14-regular")}>{item.department}</div>
                        <Svg iconName="rightIcon" className="h-[10rem] w-[6rem] stroke-gray-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={tw("mt-[20rem] w-full px-[11rem]")}>
                <div className={tw("ts-17-extrabold")}>권장조치</div>
                <div className={tw("mt-[16rem] flex flex-col gap-[26rem]")}>
                  {data.recommendedAction.map((item) => (
                    <div key={item.title} className={tw("flex flex-col gap-[8rem]")}>
                      <div
                        className={tw(
                          "flex h-[28rem] w-[93rem] items-center justify-center rounded-full bg-navy-100 text-white ts-14-regular"
                        )}
                      >
                        {item.title}
                      </div>
                      <div className={tw("whitespace-pre-line ts-15-medium")}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={tw(
          "fixed top-[env(safe-area-inset-top)] flex h-[20rem] w-full items-center justify-center bg-gradient-to-b from-gray-100 to-transparent"
        )}
      />
      <div
        className={tw(
          "fixed bottom-0 flex h-[173rem] w-full items-center justify-center bg-gradient-to-b from-transparent to-gray-100 to-35%"
        )}
      >
        <button
          onClick={() => setModalOpen(true)}
          className={tw("h-[65rem] w-[390rem] rounded-[20rem] bg-navy-100 text-white ts-20-semibold")}
        >
          적합 의료시설
        </button>
      </div>
      {document.getElementById("main") &&
        createPortal(<ListModal modalOpen={modalOpen} setModalOpen={setModalOpen} />, document.getElementById("main")!)}
    </div>
  );
}
