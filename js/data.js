export const TYPES = {
    MAKER: {
        id: "MAKER",
        title: "창작형 (Maker Type)",
        subtitle: "손끝에서 피어나는 마법",
        desc: "“당신은 1000원을 손에서 새로운 것으로 변화시키는 사람입니다.”\n\n무에서 유를 창조하는 것에 희열을 느낍니다. 남들에게는 평범한 재료도 당신의 손을 거치면 특별한 작품이 됩니다.",
        activity: "추천 챌린지: 1000원으로 예술·DIY 프로젝트 진행",
        color: "#FF6B6B"
    },
    EXPLORER: {
        id: "EXPLORER",
        title: "탐험형 (Explorer Type)",
        subtitle: "미지의 세계를 향한 티켓",
        desc: "“당신에게 1000원은 작은 여행 티켓입니다.”\n\n새로운 장소, 낯선 경험이 주는 자극을 즐깁니다. 1000원으로 떠날 수 있는 가장 먼 곳, 혹은 가장 새로운 곳을 찾아 나섭니다.",
        activity: "추천 챌린지: 1000원으로 갈 수 있는 미니 여행",
        color: "#4ECDC4"
    },
    SAVER: {
        id: "SAVER",
        title: "실용·절약형 (Saver Type)",
        subtitle: "티끌 모아 태산의 지혜",
        desc: "“1000원에서도 가치를 최대한 끌어올리는 타입입니다.”\n\n합리적인 소비와 효율을 중요시합니다. 1000원의 가치를 2000원, 그 이상으로 만드는 방법을 알고 있습니다.",
        activity: "추천 챌린지: 절약/기록 기반의 작은 실험",
        color: "#FFD93D"
    },
    OBSERVER: {
        id: "OBSERVER",
        title: "감성·관찰형 (Observer Type)",
        subtitle: "순간을 수집하는 시선",
        desc: "“당신은 작은 순간에서 의미를 찾아내는 사람입니다.”\n\n사소한 것들의 아름다움을 발견할 줄 압니다. 당신의 1000원은 감성을 기록하고 추억을 남기는 데 쓰입니다.",
        activity: "추천 챌린지: 감성 기록, 사진·글 프로젝트",
        color: "#A66EFA"
    },
    TRADER: {
        id: "TRADER",
        title: "도전·거래형 (Trader Type)",
        subtitle: "가능성을 거래하는 승부사",
        desc: "“당신에게 1000원은 가능성을 시험하는 기회입니다.”\n\n시장 흐름을 읽고 가치를 교환하는 것에 흥미를 느낍니다. 1000원을 밑천 삼아 더 큰 가치를 만들어낼 기회를 엿봅니다.",
        activity: "추천 챌린지: 1000원 장사, 리셀, 교환 미션",
        color: "#45B7D1"
    }
};

export const QUESTIONS = [
    {
        id: 1,
        question: "1000원이 생겼다. 가장 먼저 떠오르는 사용 방식은?",
        options: [
            { text: "뭔가 만들어볼 재료를 사본다", type: "MAKER" },
            { text: "가볍게 근처 어디라도 떠나본다", type: "EXPLORER" },
            { text: "일단 아껴둔다", type: "SAVER" },
            { text: "특별한 순간을 기록할 소품을 산다", type: "OBSERVER" },
            { text: "되팔기 좋은 물건을 찾아본다", type: "TRADER" }
        ]
    },
    {
        id: 2,
        question: "친구가 “1000원으로 뭘 할 수 있을까?”라고 묻는다면?",
        options: [
            { text: "간단한 DIY 아이템 만들어봐!", type: "MAKER" },
            { text: "1000원 여행지 한 군데 가보자!", type: "EXPLORER" },
            { text: "티끌 모아 푼돈이라도 모아보자", type: "SAVER" },
            { text: "의미 있는 작은 순간을 만들어보자", type: "OBSERVER" },
            { text: "1000원으로 시작하는 미니 장사 어때?", type: "TRADER" }
        ]
    },
    {
        id: 3,
        question: "다음 중 가장 “재밌어 보이는 활동”은?",
        options: [
            { text: "내가 디자인한 물건 만들기", type: "MAKER" },
            { text: "처음 가보는 동네 걷기", type: "EXPLORER" },
            { text: "생활비 줄이는 챌린지", type: "SAVER" },
            { text: "예쁜 사진 찍고 기록하기", type: "OBSERVER" },
            { text: "거래·교환 놀이하기", type: "TRADER" }
        ]
    },
    {
        id: 4,
        question: "당신의 ‘특기’에 가장 가까운 것은?",
        options: [
            { text: "무언가를 만들어내는 손재주", type: "MAKER" },
            { text: "길 찾기·새로운 장소 탐색", type: "EXPLORER" },
            { text: "계산 빠르고 합리적인 판단", type: "SAVER" },
            { text: "디테일·감정·분위기 캐치", type: "OBSERVER" },
            { text: "흥정·교환·협상 센스", type: "TRADER" }
        ]
    },
    {
        id: 5,
        question: "어떤 물건을 보면 가장 설렌다?",
        options: [
            { text: "공예 재료·문구류", type: "MAKER" },
            { text: "지도·교통카드·소품 가방", type: "EXPLORER" },
            { text: "할인 쿠폰·포인트 카드", type: "SAVER" },
            { text: "필름 카메라·노트", type: "OBSERVER" },
            { text: "중고 거래가 쉬운 아이템", type: "TRADER" }
        ]
    },
    {
        id: 6,
        question: "당신의 취향은 어떤 방식에 더 가깝나?",
        options: [
            { text: "직접 만들고 표현하는 게 좋다", type: "MAKER" },
            { text: "움직여보고 경험해봐야 안다", type: "EXPLORER" },
            { text: "현실적으로 실속 있게", type: "SAVER" },
            { text: "흐름·분위기·감성을 중시한다", type: "OBSERVER" },
            { text: "가성비보다 기회·도전이 즐겁다", type: "TRADER" }
        ]
    },
    {
        id: 7,
        question: "친구들이 말하는 ‘너의 이미지’는?",
        options: [
            { text: "창의적 / 손재주 좋음", type: "MAKER" },
            { text: "활동적 / 돌아다니는 편", type: "EXPLORER" },
            { text: "실속파 / 합리적", type: "SAVER" },
            { text: "섬세 / 감성적인 편", type: "OBSERVER" },
            { text: "똑부러짐 / 도전적", type: "TRADER" }
        ]
    },
    {
        id: 8,
        question: "당신에게 더 중요한 건?",
        options: [
            { text: "만드는 과정", type: "MAKER" },
            { text: "경험 자체", type: "EXPLORER" },
            { text: "효율과 합리성", type: "SAVER" },
            { text: "감정·감성의 질", type: "OBSERVER" },
            { text: "성과·기회 창출", type: "TRADER" }
        ]
    }
];

export const EVENT_POOL = [
    // 창작형 강화
    {
        id: "E_MAKER_1",
        question: "문구점 앞에서 500원짜리 재료를 발견했다",
        options: [
            { text: "산다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "사진만 찍어둔다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 지나간다", effects: [] }
        ]
    },
    {
        id: "E_MAKER_2",
        question: "버려진 포스터가 예뻐 보인다",
        options: [
            { text: "가져가서 리폼한다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "사진만 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "무시한다", effects: [] }
        ]
    },
    {
        id: "E_MAKER_3",
        question: "벽에 누군가 그린 낙서를 발견했다",
        options: [
            { text: "영감을 얻어 스케치를 시작한다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "사진 찍어 기록한다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 지나친다", effects: [] }
        ]
    },
    {
        id: "E_MAKER_4",
        question: "1000원짜리 소품 공예 키트를 발견했다",
        options: [
            { text: "바로 산다", effects: [{ type: "MAKER", val: 2 }] },
            { text: "고민한다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "안 산다", effects: [] }
        ]
    },
    {
        id: "E_MAKER_5",
        question: "종이컵을 줍게 되었다",
        options: [
            { text: "뭔가 만들어본다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "바로 버린다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "무시한다", effects: [] }
        ]
    },

    // 탐험형 강화
    {
        id: "E_EXPLORER_1",
        question: "근처 지하철역까지 900원으로 갈 수 있다",
        options: [
            { text: "바로 간다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "걷는 걸 선택한다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "그냥 쉬기로 한다", effects: [] }
        ]
    },
    {
        id: "E_EXPLORER_2",
        question: "모르는 골목길 발견",
        options: [
            { text: "들어가본다", effects: [{ type: "EXPLORER", val: 2 }] },
            { text: "지도 검색한다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "돌아간다", effects: [] }
        ]
    },
    {
        id: "E_EXPLORER_3",
        question: "공원에서 사람들이 무언가하고 있다",
        options: [
            { text: "가까이 가본다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "멀리서 관찰한다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 지나간다", effects: [] }
        ]
    },
    {
        id: "E_EXPLORER_4",
        question: "1000원으로 짧은 버스를 탈 수 있음",
        options: [
            { text: "탄다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "목적지 먼저 확인한다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "포기한다", effects: [] }
        ]
    },
    {
        id: "E_EXPLORER_5",
        question: "길에 새로운 가게 오픈",
        options: [
            { text: "들어가본다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "사진만 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 지나감", effects: [] }
        ]
    },

    // 실용·절약형 강화
    {
        id: "E_SAVER_1",
        question: "편의점에서 할인 스티커 발견",
        options: [
            { text: "산다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "더 싼 걸 찾는다", effects: [{ type: "SAVER", val: 2 }] },
            { text: "구매하지 않는다", effects: [] }
        ]
    },
    {
        id: "E_SAVER_2",
        question: "동전이 300원 남았다",
        options: [
            { text: "텀블러에 물 받아 마신다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "간식 산다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "모아둔다", effects: [{ type: "SAVER", val: 1 }] }
        ]
    },
    {
        id: "E_SAVER_3",
        question: "길에서 영수증을 발견했다",
        options: [
            { text: "포인트 적립 가능한지 본다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "버린다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "무시한다", effects: [] }
        ]
    },
    {
        id: "E_SAVER_4",
        question: "1000원으로 할 수 있는 게 잘 안 떠오른다",
        options: [
            { text: "검색해본다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "아무거나 해본다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "그냥 쉰다", effects: [] }
        ]
    },
    {
        id: "E_SAVER_5",
        question: "편의점 신상품이 할인 중",
        options: [
            { text: "사서 리뷰해본다", effects: [{ type: "SAVER", val: 1 }, { type: "OBSERVER", val: 1 }] },
            { text: "그냥 넘어간다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "충동구매한다", effects: [{ type: "SAVER", val: -1 }] }
        ]
    },

    // 감성·관찰형 강화
    {
        id: "E_OBSERVER_1",
        question: "공원에서 예쁜 장면을 발견",
        options: [
            { text: "사진 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그림 간단히 그린다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "그냥 구경하고 지나간다", effects: [] }
        ]
    },
    {
        id: "E_OBSERVER_2",
        question: "카페 창가 자리에서 책 읽는 사람 발견",
        options: [
            { text: "영감 얻어 기록한다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그 사람 책을 검색한다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "그냥 지나친다", effects: [] }
        ]
    },
    {
        id: "E_OBSERVER_3",
        question: "오래된 간판 발견",
        options: [
            { text: "추억 기록 남긴다", effects: [{ type: "OBSERVER", val: 2 }] },
            { text: "사진만 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 지나간다", effects: [] }
        ]
    },
    {
        id: "E_OBSERVER_4",
        question: "1000원짜리 작은 꽃 발견",
        options: [
            { text: "산다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "사진만 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 지나감", effects: [] }
        ]
    },
    {
        id: "E_OBSERVER_5",
        question: "하늘이 예쁘다",
        options: [
            { text: "바로 사진 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "기록 앱에 메모한다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "안 본 척 한다", effects: [] }
        ]
    },

    // 도전·거래형 강화
    {
        id: "E_TRADER_1",
        question: "중고마켓에서 500원짜리 소품 발견",
        options: [
            { text: "바로 산다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "흥정해본다", effects: [{ type: "TRADER", val: 2 }] },
            { text: "그냥 나간다", effects: [] }
        ]
    },
    {
        id: "E_TRADER_2",
        question: "누군가 1000원짜리 쿠폰을 교환하자고 한다",
        options: [
            { text: "교환한다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "가치 비교한다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "거절한다", effects: [] }
        ]
    },
    {
        id: "E_TRADER_3",
        question: "동전 교환 이벤트 발견",
        options: [
            { text: "도전한다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "상황을 관찰한다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "무시한다", effects: [] }
        ]
    },
    {
        id: "E_TRADER_4",
        question: "그냥 둘러보다가 '득템각' 상품 발견",
        options: [
            { text: "산다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "조사하고 산다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "그냥 넘긴다", effects: [] }
        ]
    },
    {
        id: "E_TRADER_5",
        question: "불필요한 물건 1개를 교환하라는 안내 등장",
        options: [
            { text: "교환한다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "더 좋은 거래처 찾는다", effects: [{ type: "TRADER", val: 2 }] },
            { text: "하지 않는다", effects: [] }
        ]
    }
];
