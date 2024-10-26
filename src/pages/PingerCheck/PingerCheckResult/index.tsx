import { useLocation } from "react-router-dom";

import Svg from "@/components/Svg";
import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

const diseaseData = [
  {
    name: "역류성 인후두염",
    percentage: 58,
    department: "이비인후과",
  },
  {
    name: "협심증",
    percentage: 21,
    department: "심장내과 (순환기내과)",
  },
  {
    name: "식도염",
    percentage: 14,
    department: "이비인후과",
  },
  {
    name: "심부진",
    percentage: 7,
    department: "이비인후과",
  },
];

const recommendedActionData = [
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
];

export default function PingerCheckResult() {
  const navigate = useCustomNavigate();
  const location = useLocation();
  const name = location.state.data.name;

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
              "shadow-resultBox w-full overflow-hidden rounded-[14rem] border-[1rem] border-solid border-navy-100 bg-white"
            )}
          >
            <div className={tw("h-[14rem] w-full bg-ktas3")} />
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
                    <div className={tw("text-[34rem] font-extrabold leading-[42rem]")}>3</div>
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
                  <div className={tw("h-[10rem] w-full rounded-full bg-ktas3")} />
                  <div className={tw("absolute right-0 h-[10rem] w-[46%] rounded-r-full bg-gray-200")}></div>
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
                      "shadow-resultKtasLevelCircle absolute right-[calc(46%-9rem)] flex h-[18rem] w-[18rem] items-center justify-center rounded-full bg-ktas3"
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
                      "absolute left-0 top-[73.6rem] flex h-[140rem] w-[140rem] flex-col items-center justify-center rounded-full border-[1rem] border-solid border-white bg-gradient-to-b from-[#F2C40F] to-[#F9DD71]"
                    )}
                  >
                    <div className={tw("mt-[12rem] ts-16-bold")}>{diseaseData[0].name}</div>
                    <div className={tw("text-gray-600 ts-16-regular")}>{diseaseData[0].percentage}%</div>
                  </div>
                  <div
                    className={tw(
                      "absolute left-[114rem] flex h-[93rem] w-[93rem] flex-col items-center justify-center rounded-full bg-gray-600"
                    )}
                  >
                    <div className={tw("mt-[12rem] text-white ts-16-semibold")}>{diseaseData[1].name}</div>
                    <div className={tw("text-gray-300 ts-14-regular")}>{diseaseData[1].percentage}%</div>
                  </div>

                  <div
                    className={tw(
                      "absolute right-0 top-[78.7rem] flex h-[88rem] w-[88rem] items-center justify-center rounded-full bg-gray-400 ts-16-semibold"
                    )}
                  >
                    {diseaseData[2].name}
                  </div>
                  <div
                    className={tw(
                      "absolute bottom-0 right-[63rem] flex h-[64rem] w-[64rem] items-center justify-center rounded-full bg-gray-300 ts-13-semibold"
                    )}
                  >
                    {diseaseData[3].name}
                  </div>
                </div>
                <div className={tw("mt-[19rem] flex w-full flex-col gap-[14rem]")}>
                  {diseaseData.slice(0, 3).map((item) => (
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
                  {recommendedActionData.map((item) => (
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
        <button className={tw("h-[65rem] w-[390rem] rounded-[20rem] bg-navy-100 text-white ts-20-semibold")}>
          적합 의료시설
        </button>
      </div>
    </div>
  );
}
