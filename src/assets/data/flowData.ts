import { TPingerCheckData } from "@/pages/PingerCheck/PingerCheckDetail/types";

export type TQuestionDataItem = {
  symptom: string[];
  question: {
    title: string[];
    titleDesc?: string;
    detailQuestion?: string;
  };
  answer: {
    type: string;
    data?: any;
  };
};

type TQuestionData = {
  [key: string]: TPingerCheckData[];
};

export const questionData: (name: string) => TQuestionData = (name: string) => ({
  피부: [
    {
      symptom: ["물림 (Bite)", "쏘임 (Sting)", "찰과상", "열상 / 천공", "화상", "소양증", "혹, 돌기, 굳은 살"],
      question: {
        title: [`현재 ${name}님의`, "체온", "을 알려주세요."],
        titleDesc: "체온계를 이용한 정확한 체온을 입력해주세요.",
      },
      answer: { type: "temperature" },
    },
    {
      symptom: ["찰과상"],
      question: {
        title: [`현재 ${name}님의`, "화상 정도", "를 알려주세요."],
        titleDesc: "화상의 정도를 선택해주세요.",
      },
      answer: {
        type: "singleChoiceWithTag",
        data: [
          {
            title: "1도 화상",
            tags: ["붉은 피부", "따금거림", "가벼운 부기"],
            desc: "피부가 붉어지고, 따끔거리거나 약간 아픈 느낌이 들며, 가벼운 부기가 있을 수 있음.",
          },
          {
            title: "2도 화상",
            tags: ["통증", "물집", "따가움", "부종"],
            desc: "심한 통증과 피부가 붉어지고 물집이 생김. 물집이 터지면 상처가 드러나며, 촉감이 아프고 따가움. 이와 함께 부종이 동반될 수 있음.",
          },
          {
            title: "3도 화상",
            tags: ["검은 피부", "무통증", "건조한 피부"],
            desc: "피부가 하얗거나 검게 변하고, 심한 통증이 없을 수 있음(신경 손상으로 인해). 피부가 매우 건조하고 거칠며, 주변 피부와는 다르게 촉감이 변함.",
          },
        ],
      },
    },
    {
      symptom: ["화상"],
      question: {
        title: [`현재 ${name}님의`, "화상 체표면적", "을 알려주세요."],
        titleDesc: "체표면적을 선택해주세요.",
      },
      answer: { type: "burnBodySurface" },
    },
    {
      symptom: ["찰과상"],
      question: {
        title: [`현재 ${name}님의`, "상처 정도", "를 알려주세요."],
      },
      answer: {
        type: "singleChoiceWithTag",
        data: [
          {
            title: "경미한 상처",
            tags: ["표피가 벗겨짐", "미량의 출혈"],
            desc: "피부의 가장 바깥층만 살짝 벗겨졌으며, 통증은 거의 없고 출혈도 발생하지 않음. 따갑지만 금방 회복될 수 있음.",
          },
          {
            title: "중간 정도의 상처",
            tags: ["표피가 벗겨짐", "소량의 출혈"],
            desc: "피부의 바깥층뿐만 아니라 그 아래 살까지 까졌으며, 피가 조금 나오고 통증이 느껴짐. 상처가 넓지는 않지만 소독이 필요하고, 회복에 며칠이 걸릴 수 있음.",
          },
          {
            title: "경미한 상처",
            tags: ["표피가 깊게 벗겨짐", "다량의 출혈"],
            desc: "피부가 깊게 벗겨져 진피층까지 노출되고 피가 많이 나며, 통증이 심함. 상처 범위도 넓고 감염 위험이 커서 즉각적인 치료가 필요함.",
          },
        ],
      },
    },
    {
      symptom: ["열상 / 천공"],
      question: {
        title: [`현재 ${name}님의`, "상처 정도", "를 알려주세요."],
      },
      answer: {
        type: "singleChoiceWithTag",
        data: [
          {
            title: "경미한 찢어짐",
            tags: ["얕고 작은 상처", "미량의 출혈"],
            desc: "상처가 표피층에만 국한되며, 길이도 짧고 깊이도 얕음. 출혈이 약간 있거나 거의 없고, 통증은 경미함. 스스로 회복될 가능성이 크며, 간단한 소독으로 충분함.",
          },
          {
            title: "중간 정도의 찢어짐",
            tags: ["표피가 벗겨짐", "소량의 출혈"],
            desc: "상처가 진피층까지 깊게 찢어져 출혈이 지속될 수 있음. 상처 크기가 비교적 크고, 소독이나 봉합이 필요할 수 있으며, 통증은 중간 정도임.",
          },
          {
            title: "심각한 찢어짐",
            tags: ["표피가 깊게 벗겨짐", "다량의 출혈"],
            desc: "상처가 근육층까지 깊게 찢어져 심한 출혈이 있으며, 출혈이 멈추지 않음. 통증이 극심하고, 봉합이나 수술이 필요할 수 있어 즉각적인 의료 처치가 요구됨.",
          },
        ],
      },
    },
    {
      symptom: ["소양증"],
      question: {
        title: [`현재 ${name}님의`, "가려움 추정 원인", "을 알려주세요."],
      },
      answer: {
        type: "singleChoice",
        data: [
          "일시적인 가려움",
          "지속적이면서 긁게 되는 가려움",
          "피부에 발진이나 염증이 동반된 심한 가려움피부에 발진이나 염증이 동반된 심한 가려움피부에 발진이나 염증이 동반된 심한 가려움피부에 발진이나 염증이 동반된 심한 가려움",
          "알레르기 반응 의심됨",
          "잘 모르겠어요",
        ],
      },
    },
    {
      symptom: ["혹, 돌기, 굳은 살"],
      question: {
        title: [`현재 ${name}님의`, "증상의 크기 변화", "를 알려주세요."],
      },
      answer: {
        type: "singleChoice",
        data: [
          "크기나 모양에 별다른 변화 없이 통증도 없음. 만졌을 때 불편함이 거의 없고, 주변 피부 상태도 정상임.",
          "혹이나 굳은 살이 비교적 크고, 만졌을 때 통증이나 불편감이 있음. 주변 피부가 붉어지거나 약간 부어오를 수 있음.",
          "혹이나 굳은 살이 크고 눈에 띄게 부어있으며, 피부 색깔이 변하거나 심한 통증이 동반됨. 주변 부위에 염증이나 열감이 있을 수 있어, 즉각적인 치료가 필요함.",
        ],
      },
    },
    {
      symptom: ["물림 (Bite)", "쏘임 (Sting)", "찰과상", "열상 / 천공"],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "증상이 지속된 기간을 알려주세요.",
        detailQuestion: "통증을 느낀지 얼마나 되었나요?",
      },
      answer: { type: "timeChoice" },
    },
  ],
  신경계: [
    {
      symptom: [
        "의식 수준의 변화",
        "현훈",
        "두통",
        "발작",
        "보행 장애 / 운동 실조 / 강직",
        "두부 손상",
        "떨림 (Tremor)",
      ],
      question: {
        title: [`현재 ${name}님의`, "체온", "을 알려주세요."],
        titleDesc: "체온계를 이용한 정확한 체온을 입력해주세요.",
      },
      answer: { type: "temperature" },
    },
    {
      symptom: ["의식 수준의 변화"],
      question: {
        title: [`현재 ${name}님의`, "의식 수준 변화", "를 알려주세요."],
        titleDesc: "의식 변화가 발생한 시점과 상태를 알려주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["갑작스러운 의식 저하", "점진적인 의식 저하", "간헐적인 의식 저하", "의식 소실", "잘 모르겠어요"],
      },
    },
    {
      symptom: ["현훈"],
      question: {
        title: [`현재 ${name}님의`, "어지러움 정도", "를 알려주세요."],
      },
      answer: {
        type: "singleChoiceWithTag",
        data: [
          {
            title: "경미한 어지러움",
            tags: ["가벼운 어지러움", "불편감 적음"],
            desc: "일상 활동에 거의 지장이 없고, 가벼운 어지러움만 느낌.",
          },
          {
            title: "중간 정도의 어지러움",
            tags: ["간헐적 어지러움", "가벼운 불편감"],
            desc: "어지러움이 간헐적으로 발생하여 불편함을 느끼지만, 활동이 불가능하지는 않음.",
          },
          {
            title: "심각한 어지러움",
            tags: ["심한 어지러움", "활동 어려움"],
            desc: "어지러움이 심하고 일상 활동이 어렵거나 불가능함.",
          },
        ],
      },
    },
    {
      symptom: ["두통"],
      question: {
        title: [`현재 ${name}님의`, "두통 정도", "를 알려주세요."],
        titleDesc: "두통의 위치와 강도를 선택해주세요.",
      },
      answer: {
        type: "pain",
      },
    },
    {
      symptom: ["발작"],
      question: {
        title: [`현재 ${name}님의`, "발작 여부", "를 알려주세요."],
        titleDesc: "발작이 발생한 빈도와 강도를 선택해주세요.",
      },
      answer: {
        type: "singleChoice",
        data: [
          "경련이 발생함",
          "의식이 사라짐",
          "몸의 특정 부위에서만 경련 발생",
          "심한 경련",
          "일시적인 발작",
          "발작 후 심한 피로감",
        ],
      },
    },
    {
      symptom: ["보행 장애 / 운동 실조 / 강직"],
      question: {
        title: [`현재 ${name}님의`, "보행 장애", "의 정도를 알려주세요."],
        titleDesc: "보행 장애나 운동 실조가 있는지 선택해주세요.",
      },
      answer: {
        type: "singleChoiceWithTag",
        data: [
          {
            title: "가벼운 보행 장애",
            tags: ["약간의 불편함", "느린 걸음"],
            desc: "걷는 데 약간의 불편함이 있으며, 걸음걸이가 평소보다 느림.",
          },
          {
            title: "중간 정도의 보행 장애",
            tags: ["보행 불편", "균형 유지 어려움"],
            desc: "보행 시 불편함이 크며, 균형을 유지하는 데 어려움이 있음.",
          },
          {
            title: "심한 보행 장애",
            tags: ["심한 불편감", "보조 기구 필요"],
            desc: "걷는 데 심한 불편감을 느끼며, 보행 보조 기구를 사용해야 함.",
          },
        ],
      },
    },
    {
      symptom: ["두부 손상"],
      question: {
        title: [`현재 ${name}님의`, "두부 손상 정도", "를 알려주세요."],
        titleDesc: "두부 손상의 위치와 정도를 선택해주세요.",
      },
      answer: {
        type: "singleChoiceWithTag",
        data: [
          {
            title: "경미한 두부 손상",
            tags: ["얕은 상처", "미량의 출혈"],
            desc: "두피나 얼굴에 얕은 상처가 있으며, 출혈이 거의 없거나 미미함. 통증은 경미하고, 일상생활에 큰 지장이 없음.",
          },
          {
            title: "중간 정도의 두부 손상",
            tags: ["중간 정도의 상처", "출혈", "두통"],
            desc: "두피에 중간 정도의 상처가 있으며, 출혈이 발생할 수 있음. 통증과 함께 두통이 느껴질 수 있으며, 약간의 어지러움이 동반될 수 있음.",
          },
          {
            title: "심각한 두부 손상",
            tags: ["심한 출혈", "의식 저하", "두개골 골절"],
            desc: "두피나 얼굴에 심각한 상처가 있으며, 출혈이 많고 두개골 골절 가능성이 있음. 의식 저하 또는 혼란 상태가 나타날 수 있음. 즉각적인 의료 처치가 필요함.",
          },
        ],
      },
    },
    {
      symptom: ["떨림 (Tremor)"],
      question: {
        title: [`현재 ${name}님의`, "떨림 정도", "를 알려주세요."],
      },
      answer: {
        type: "singleChoice",
        data: ["가벼운 떨림", "중간 정도의 떨림", "심한 떨림", "지속적인 떨림", "간헐적인 떨림"],
      },
    },
    {
      symptom: ["의식 수준의 변화", "현훈", "두통", "발작", "떨림 (Tremor)"],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "증상이 지속된 기간을 알려주세요.",
        detailQuestion: "증상이 얼마나 지속되었나요?",
      },
      answer: { type: "timeChoice" },
    },
  ],
  알레르기: [
    {
      symptom: ["부종"],
      question: {
        title: [`현재 ${name}님의`, "부종 부위", "를 알려주세요."],
        titleDesc: "해당되는 버튼을 모두 선택해주세요.",
      },
      answer: {
        type: "multiChoice",
        data: ["눈 주위", "뺨", "입술", "목구멍과 기도", "손과 발", "해당 부위 없음"],
      },
    },
    {
      symptom: ["피부 발진", "열", "기침", "부종", "구역질", "복통 또는 설사", "숨이 쉬기 어려움"],
      question: {
        title: [`현재 ${name}님의`, "체온", "을 알려주세요."],
        titleDesc: "체온계를 이용한 정확한 체온을 입력해주세요.",
      },
      answer: {
        type: "temperature",
      },
    },
    {
      symptom: ["피부 발진", "열", "기침", "부종", "구역질", "복통 또는 설사", "숨이 쉬기 어려움"],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요.",
        detailQuestion: "반응 물질에 접촉한 직후 1시간 이내에 지금의 증상이 나타났나요?",
      },
      answer: {
        type: "singleChoiceDetail",
        data: ["예", "아니오"],
      },
    },
    {
      symptom: ["피부 발진", "열", "기침", "부종", "구역질", "복통 또는 설사", "숨이 쉬기 어려움"],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요.",
        detailQuestion: "알레르기 반응이 지속된지\n얼마나 되었나요?",
      },
      answer: {
        type: "timeChoice",
      },
    },
  ],
  소화: [
    {
      symptom: ["복통", "식욕부진", "변비", "설사", "샅고랑 부위 통증 / 종괴", "구토 / 구역"],
      question: {
        title: [`현재 ${name}님의`, "체온", "을 알려주세요."],
        titleDesc: "체온계를 이용한 정확한 체온을 입력해주세요.",
      },
      answer: { type: "temperature" },
    },
    {
      symptom: ["복통"],
      question: {
        title: [`현재 호소하는 증상의`, "복통 정도", "를 선택해주세요."],
        titleDesc: "출혈이 발생하는 위치를 선택해주세요.",
      },
      answer: {
        type: "pain",
      },
    },
    {
      symptom: ["식욕부진"],
      question: {
        title: [`현재 ${name}님의`, "식욕 상태", "를 알려주세요."],
        titleDesc: "최근 식사량이 줄었는지 알려주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["평소보다 식사량 감소", "음식에 대한 관심 없음", "전체적으로 기운 없음", "기타"],
      },
    },
    {
      symptom: ["샅고랑 부위 통증 / 종괴"],
      question: {
        title: [`현재 ${name}님의`, "샅고랑 부위 통증 위치", "를 알려주세요."],
        titleDesc: "통증이 발생하는 위치를 선택해주세요.",
      },
      answer: {
        type: "multiChoice",
        data: ["좌측 샅고랑", "우측 샅고랑", "중앙", "양측 샅고랑", "확실하지 않음"],
      },
    },
    {
      symptom: ["설사"],
      question: {
        title: [`현재 ${name}님의`, "설사 빈도", "를 알려주세요."],
        titleDesc: "하루에 몇 번이나 설사를 하는지 선택해주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["하루에 한두 번", "하루 세 번 이상", "하루 다섯 번 이상", "상시 발생"],
      },
    },
    {
      symptom: ["구토 / 구역"],
      question: {
        title: [`현재 ${name}님의`, "구토 빈도", "를 알려주세요."],
        titleDesc: "하루에 몇 번 정도 구토 또는 구역질이 발생하는지 선택해주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["한두 번", "세 번 이상", "다섯 번 이상", "수시로 발생"],
      },
    },

    {
      symptom: ["식욕부진"],
      question: {
        title: [`현재 ${name}님의`, "식욕 부진 이유", "를 알려주세요."],
        titleDesc: "식욕 부진의 원인을 아는 경우 선택해주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["스트레스 또는 감정적 요인", "질병 또는 건강 문제", "기타 원인", "확실하지 않음"],
      },
    },
    {
      symptom: ["복통", "식욕부진", "변비", "설사", "샅고랑 부위 통증 / 종괴", "구토 / 구역"],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "증상이 지속된 기간을 알려주세요.",
        detailQuestion: "증상이 얼마나 지속되었나요?",
      },
      answer: {
        type: "timeChoice",
      },
    },
  ],
  "코, 귀": [
    {
      symptom: [
        "코피",
        "코의 이물질",
        "상기도감염 증상 호소",
        "코의 외상",
        "이통 (Earache)",
        "귀의 이물질",
        "청력소실",
      ],
      question: {
        title: [`현재 ${name}님의`, "체온", "을 알려주세요."],
        titleDesc: "체온계를 이용한 정확한 체온을 입력해주세요.",
      },
      answer: { type: "temperature" },
    },
    {
      symptom: ["코피"],
      question: {
        title: [`현재 ${name}님의`, "코피 출혈 위치", "를 알려주세요."],
        titleDesc: "출혈이 발생하는 위치를 선택해주세요.",
      },
      answer: {
        type: "multiChoice",
        data: ["왼쪽 코", "오른쪽 코", "양쪽 코", "모르겠음"],
      },
    },
    {
      symptom: ["상기도감염 증상 호소"],
      question: {
        title: [`현재 ${name}님의`, "주요 증상", "을 선택해주세요."],
        titleDesc: "상기도감염의 주요 증상을 모두 선택해주세요.",
      },
      answer: {
        type: "multiChoice",
        data: ["콧물", "기침", "인후통", "두통", "발열"],
      },
    },
    {
      symptom: ["코의 이물질"],
      question: {
        title: [`현재 ${name}님의`, "코 이물질 감각", "을 알려주세요."],
        titleDesc: "코 안에 이물질이 느껴지는지 여부를 선택해주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["느껴짐", "느껴지지 않음", "확실하지 않음"],
      },
    },
    {
      symptom: ["청력소실"],
      question: {
        title: [`현재 ${name}님의`, "청력 저하 정도", "를 알려주세요."],
        titleDesc: "청력 소실의 정도를 선택해주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["부분적 청력 소실", "완전 청력 소실", "가끔씩 발생", "확실하지 않음"],
      },
    },
    {
      symptom: ["이통 (Earache)"],
      question: {
        title: [`현재 ${name}님의`, "귀 통증 정도", "를 알려주세요."],
        titleDesc: "통증의 정도를 선택해주세요.",
      },
      answer: { type: "pain" },
    },
    {
      symptom: ["코의 외상"],
      question: {
        title: [`현재 ${name}님의`, "코 외상 상태", "를 알려주세요."],
        titleDesc: "코에 입은 외상의 상태를 선택해주세요.",
      },
      answer: {
        type: "singleChoiceDetail",
        data: ["가벼운 타박상", "붓기와 통증", "코뼈 부러짐", "코의 출혈"],
      },
    },
    {
      symptom: [
        "코피",
        "코의 이물질",
        "상기도감염 증상 호소",
        "코의 외상",
        "이통 (Earache)",
        "귀의 이물질",
        "청력소실",
      ],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "증상이 지속된 기간을 알려주세요.",
        detailQuestion: "증상이 얼마나 지속되었나요?",
      },
      answer: { type: "timeChoice" },
    },
  ],
  황달: [
    {
      symptom: ["구토 / 구역"],
      question: {
        title: [`현재 ${name}님의`, "구토 빈도", "를 알려주세요."],
        titleDesc: "하루에 몇 번 정도 구토 또는 구역질이 발생하는지 선택해주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["한두 번", "세 번 이상", "다섯 번 이상", "수시로 발생"],
      },
    },
    {
      symptom: ["복부 종괴 / 팽만"],
      question: {
        title: [`현재 ${name}님의`, "복부 팽만 정도", "를 알려주세요."],
        titleDesc: "복부가 부어오른 정도를 선택해주세요.",
      },
      answer: {
        type: "singleChoiceWithTag",
        data: [
          {
            title: "경미한 팽만",
            tags: ["약간 부어오름", "통증 없음"],
            desc: "복부가 약간 부어오르며, 통증이나 불편감이 거의 없음. 일상생활에 큰 지장이 없는 상태.",
          },
          {
            title: "중등도 팽만",
            tags: ["눈에 띄는 부어오름", "약간의 통증"],
            desc: "복부가 눈에 띄게 부어오르며, 약간의 통증이나 불편감이 있을 수 있음. 일상적인 활동에 지장을 줄 수 있음.",
          },
          {
            title: "심한 팽만",
            tags: ["심한 부어오름", "강한 통증", "호흡 곤란"],
            desc: "복부가 심하게 부어오르고, 강한 통증과 함께 호흡에 불편을 느낄 수 있음. 즉각적인 의료 처치가 필요할 수 있음.",
          },
        ],
      },
    },
    {
      symptom: ["혈변"],
      question: {
        title: [`현재 ${name}님의`, "변의 색상", "을 알려주세요."],
        titleDesc: "변의 색상을 선택해주세요.",
      },
      answer: {
        type: "singleChoice",
        data: ["밝은 빨간색", "어두운 빨간색", "검은색"],
      },
    },
    {
      symptom: ["이물질 삼킴 (FB Swallowing)"],
      question: {
        title: [`현재 ${name}님의`, "이물질로 인한 불편감", "을 알려주세요."],
        titleDesc: "이물질을 삼킨 후 불편감을 느끼는 위치를 선택해주세요.",
      },
      answer: {
        type: "multiChoice",
        data: ["목", "가슴", "복부", "확실하지 않음"],
      },
    },
    {
      symptom: ["복통"],
      question: {
        title: [`현재 호소하는 증상의`, "복통 정도", "를 선택해주세요."],
        titleDesc: "출혈이 발생하는 위치를 선택해주세요.",
      },
      answer: {
        type: "pain",
      },
    },
    {
      symptom: ["설사"],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요.",
        detailQuestion: "평소보다 기력이 약해지거나 어지럽고 입이 마르나요?",
      },
      answer: {
        type: "singleChoiceDetail",
        data: ["네", "아니오", "잘 모르겠어요"],
      },
    },
    {
      symptom: ["식욕부진"],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요.",
        detailQuestion: "특별히 체중을 빼려고 하지 않았는데도 반년 사이 5kg 이상 체중이 감소했나요?",
      },
      answer: {
        type: "singleChoiceDetail",
        data: ["네", "아니오"],
      },
    },
    {
      symptom: ["설사", "식욕부진", "구토 / 구역", "복부 종괴 / 팽만", "혈변", "복통", "이물질 삼킴 (FB Swallowing)"],
      question: {
        title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
        titleDesc: "증상이 지속된 기간을 알려주세요.",
        detailQuestion: "황달 증상을 느낀지 얼마나 되었나요?",
      },
      answer: { type: "timeChoice" },
    },
  ],
});

export const timeChoiceData = {
  time: {
    symptom: [],
    question: {
      title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
      titleDesc: "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요.",
      detailQuestion: "해당 증상을 느낀지 몇 시간 되었나요?",
    },
    answer: {
      type: "timeCheck",
    },
  },
  day: {
    symptom: [],
    question: {
      title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
      titleDesc: "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요.",
      detailQuestion: "해당 증상을 느낀지 몇 일 되었나요?",
    },
    answer: {
      type: "dayCheck",
    },
  },
  month: {
    symptom: [],
    question: {
      title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
      titleDesc: "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요.",
      detailQuestion: "해당 증상을 느낀지 몇 개월 되었나요?",
    },
    answer: {
      type: "monthCheck",
    },
  },
  year: {
    symptom: [],
    question: {
      title: ["정확한 증상 확인을 위해", "세부 질문", "을 드리겠습니다."],
      titleDesc: "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요.",
      detailQuestion: "해당 증상을 느낀지 몇 년 되었나요?",
    },
    answer: {
      type: "yearCheck",
    },
  },
};

//   B: {
//     symptom: "착란",
//     questions: [
//       { question: "착란 증상이 얼마나 자주 발생하나요?", input_type: "range", range: [1, 5] },
//       { question: "착란이 발생했을 때의 상황을 설명해주세요.", input_type: "text" },
//     ],
//   },
//   C: {
//     symptom: "현훈",
//     questions: [
//       { question: "현훈 증상이 발생한 시점은 언제인가요?", input_type: "date" },
//       { question: "현훈의 강도는 어느 정도인가요?", input_type: "range", range: [1, 5] },
//       {
//         question: "현훈이 발생할 때 다른 증상(예: 메스꺼움)이 동반되나요?",
//         input_type: "multiple_choice",
//         options: ["예", "아니오"],
//       },
//     ],
//   },
//   D: {
//     symptom: "두통",
//     questions: [
//       { question: "두통을 언제 처음 느꼈나요?", input_type: "date" },
//       { question: "두통의 강도를 선택해주세요.", input_type: "range", range: [1, 10] },
//       { question: "두통의 위치를 설명해주세요.", input_type: "text" },
//     ],
//   },
//   E: {
//     symptom: "발작",
//     questions: [
//       { question: "발작이 언제 발생했나요?", input_type: "date" },
//       { question: "발작이 발생한 시간은 얼마였나요?", input_type: "time" },
//       { question: "발작 중 나타난 증상을 설명해주세요.", input_type: "text" },
//     ],
//   },
//   F: {
//     symptom: "보행 장애 / 운동 실조 / 강직",
//     questions: [
//       { question: "보행 장애를 처음 느낀 시점은 언제인가요?", input_type: "date" },
//       { question: "증상의 정도를 선택해주세요.", input_type: "range", range: [1, 5] },
//       {
//         question: "증상이 발생할 때 다른 동반 증상이 있나요?",
//         input_type: "multiple_choice",
//         options: ["예", "아니오"],
//       },
//     ],
//   },
//   G: {
//     symptom: "두부 손상",
//     questions: [
//       { question: "머리를 다친 날짜는 언제인가요?", input_type: "date" },
//       { question: "머리를 다친 이후 두통이 있나요?", input_type: "multiple_choice", options: ["예", "아니오"] },
//       {
//         question: "다친 후 메스꺼움이나 구토 증상이 있었나요?",
//         input_type: "multiple_choice",
//         options: ["예", "아니오"],
//       },
//     ],
//   },
//   H: {
//     symptom: "떨림 (Tremor)",
//     questions: [
//       { question: "떨림을 처음 느낀 시점은 언제인가요?", input_type: "date" },
//       { question: "떨림의 빈도를 선택해주세요.", input_type: "range", range: [1, 5] },
//       { question: "떨림이 발생하는 상황을 설명해주세요.", input_type: "text" },
//     ],
//   },
//   I: {
//     symptom: "사지 약화 / 뇌졸중 증상",
//     questions: [
//       { question: "사지 약화를 처음 느낀 시점은 언제인가요?", input_type: "date" },
//       {
//         question: "약화된 부위를 선택해주세요.",
//         input_type: "multiple_choice",
//         options: ["팔", "다리", "양쪽 팔", "양쪽 다리"],
//       },
//       { question: "뇌졸중 증상이 동반되나요?", input_type: "multiple_choice", options: ["예", "아니오"] },
//     ],
//   },
//   J: {
//     symptom: "감각상실 / 이상감각",
//     questions: [
//       { question: "감각 상실을 처음 느낀 시점은 언제인가요?", input_type: "date" },
//       {
//         question: "감각이 상실된 부위를 선택해주세요.",
//         input_type: "multiple_choice",
//         options: ["손", "발", "팔", "다리"],
//       },
//       { question: "이상감각이 동반되나요?", input_type: "multiple_choice", options: ["예", "아니오"] },
//     ],
//   },
//   K: {
//     symptom: "기억상실",
//     questions: [
//       { question: "기억상실을 처음 느낀 시점은 언제인가요?", input_type: "date" },
//       { question: "어떤 종류의 기억이 상실되었나요?", input_type: "text" },
//       { question: "기억상실의 정도를 선택해주세요.", input_type: "range", range: [1, 5] },
//     ],
//   },
// },
