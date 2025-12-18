// Data Definitions
const TYPES = {
    MAKER: {
        id: "MAKER",
        title: "창작형 (Maker Type)",
        subtitle: "손끝에서 피어나는 마법",
        desc: "“당신은 1000원을 손에서 새로운 것으로 변화시키는 사람입니다.”\n\n무에서 유를 창조하는 것에 희열을 느낍니다. 남들에게는 평범한 재료도 당신의 손을 거치면 특별한 작품이 됩니다.",
        activities: [
            "🎨 1000원으로 예술·DIY 프로젝트 진행",
            "📱 다이소 파츠로 폰꾸/탑꾸 도전",
            "✂️ 전단지/포장지로 콜라주 작품 만들기"
        ],
        color: "#FF6B6B"
    },
    EXPLORER: {
        id: "EXPLORER",
        title: "탐험형 (Explorer Type)",
        subtitle: "미지의 세계를 향한 티켓",
        desc: "“당신에게 1000원은 작은 여행 티켓입니다.”\n\n새로운 장소, 낯선 경험이 주는 자극을 즐깁니다. 1000원으로 떠날 수 있는 가장 먼 곳, 혹은 가장 새로운 곳을 찾아 나섭니다.",
        activities: [
            "🗺️ 1000원으로 갈 수 있는 미니 여행",
            "🚶 동네의 안 가본 골목 끝까지 가보기",
            "🚌 무작위 버스 타고 3정거장 뒤에 내려 구경하기"
        ],
        color: "#4ECDC4"
    },
    SAVER: {
        id: "SAVER",
        title: "실용·절약형 (Saver Type)",
        subtitle: "티끌 모아 태산의 지혜",
        desc: "“1000원에서도 가치를 최대한 끌어올리는 타입입니다.”\n\n합리적인 소비와 효율을 중요시합니다. 1000원의 가치를 2000원, 그 이상으로 만드는 방법을 알고 있습니다.",
        activities: [
            "🐖 절약/기록 기반의 작은 실험",
            "💸 일주일 동안 1000원도 안 쓰는 '무지출 챌린지'",
            "🏪 편의점 1+1, 마감 할인으로 최고의 만찬 차리기"
        ],
        color: "#FFD93D"
    },
    OBSERVER: {
        id: "OBSERVER",
        title: "감성·관찰형 (Observer Type)",
        subtitle: "순간을 수집하는 시선",
        desc: "“당신은 작은 순간에서 의미를 찾아내는 사람입니다.”\n\n사소한 것들의 아름다움을 발견할 줄 압니다. 당신의 1000원은 감성을 기록하고 추억을 남기는 데 쓰입니다.",
        activities: [
            "📸 감성 기록, 사진·글 프로젝트",
            "💜 하루 동안 '보라색' 물건만 찾아 사진 찍기",
            "👀 지나가는 사람들의 표정이나 옷차림 크로키하기"
        ],
        color: "#A66EFA"
    },
    TRADER: {
        id: "TRADER",
        title: "도전·거래형 (Trader Type)",
        subtitle: "가능성을 거래하는 승부사",
        desc: "“당신에게 1000원은 가능성을 시험하는 기회입니다.”\n\n시장 흐름을 읽고 가치를 교환하는 것에 흥미를 느낍니다. 1000원을 밑천 삼아 더 큰 가치를 만들어낼 기회를 엿봅니다.",
        activities: [
            "⚖️ 1000원 장사, 리셀, 교환 미션",
            "🥕 당근마켓에서 1000원으로 물물교환 시작하기",
            "🤝 1000원으로 재료 사서 만든 물건 친구에게 팔아보기"
        ],
        color: "#45B7D1"
    }
};

const EVENT_TITLES = {
    MAKER: "🎨 창작 본능 발동!",
    EXPLORER: "🧭 미지의 구역 발견!",
    SAVER: "💰 알뜰살뜰 찬스!",
    OBSERVER: "👀 감성 포착 순간!",
    TRADER: "⚖️ 절호의 거래 기회!"
};

const QUESTIONS = [
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

const EVENT_POOL = [
    // 1. 창작형 이벤트
    {
        id: "E_MAKER_1",
        question: "편의점 앞에 재활용 박스가 놓여 있다",
        options: [
            { text: "박스 조각을 잘라 소품을 만든다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "QR 코드 있는지 확인하고 지나간다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "그냥 지나친다", effects: [] }
        ]
    },
    {
        id: "E_MAKER_2",
        question: "동네 벽에 붙은 오래된 포스터 발견",
        options: [
            { text: "색감이 좋아서 스크랩 사진 찍는다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "정보가 뭔지 검색해본다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "사진만 찍고 잊는다", effects: [{ type: "OBSERVER", val: 1 }] }
        ]
    },
    {
        id: "E_MAKER_3",
        question: "카페 테이블에 버려진 영수증을 보았다",
        options: [
            { text: "패턴이 예뻐서 콜라주 자료로 챙긴다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "그냥 버린다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "메모장에 아이디어만 적어둔다", effects: [{ type: "OBSERVER", val: 1 }] }
        ]
    },
    {
        id: "E_MAKER_4",
        question: "SNS에서 1000원 재료 챌린지 영상 봄",
        options: [
            { text: "바로 따라 만든다", effects: [{ type: "MAKER", val: 2 }] },
            { text: "저장만 해둔다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "스크롤 내림", effects: [] }
        ]
    },
    {
        id: "E_MAKER_5",
        question: "길에서 색이 다른 돌멩이를 발견",
        options: [
            { text: "주워서 작은 장식품 만들어본다", effects: [{ type: "MAKER", val: 1 }] },
            { text: "사진만 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 둔다", effects: [] }
        ]
    },

    // 2. 탐험형 이벤트
    {
        id: "E_EXPLORER_1",
        question: "근처 골목에서 안 가본 카페를 발견",
        options: [
            { text: "바로 들어가본다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "메뉴만 확인하고 나온다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "사진만 찍는다", effects: [{ type: "OBSERVER", val: 1 }] }
        ]
    },
    {
        id: "E_EXPLORER_2",
        question: "버스 정류장에 ‘이 노선은 처음 보는데?’",
        options: [
            { text: "일단 타본다", effects: [{ type: "EXPLORER", val: 2 }] },
            { text: "환승 여부 검색한다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "그냥 기다린다", effects: [] }
        ]
    },
    {
        id: "E_EXPLORER_3",
        question: "공원 벤치에 누군가가 남긴 쪽지 발견",
        options: [
            { text: "읽어본다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "사진 찍고 지나친다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그대로 둔다", effects: [] }
        ]
    },
    {
        id: "E_EXPLORER_4",
        question: "지도 앱에 “근처의 숨은 장소” 추천 등장",
        options: [
            { text: "바로 가본다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "저장만 한다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "무시한다", effects: [] }
        ]
    },
    {
        id: "E_EXPLORER_5",
        question: "작은 벼룩시장이 열린 걸 발견",
        options: [
            { text: "구경하며 돌아다닌다", effects: [{ type: "EXPLORER", val: 1 }] },
            { text: "구경만 하고 가격 비교한다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "그냥 지나친다", effects: [] }
        ]
    },

    // 3. 절약형 이벤트
    {
        id: "E_SAVER_1",
        question: "편의점에서 ‘1+1인데 유통기한 임박’",
        options: [
            { text: "바로 사둔다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "날짜 보고 신중히 결정한다", effects: [{ type: "SAVER", val: 2 }] },
            { text: "아예 무시한다", effects: [] }
        ]
    },
    {
        id: "E_SAVER_2",
        question: "동전이 1000원 남았다",
        options: [
            { text: "교통카드 충전한다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "저금통에 넣는다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "즉석 간식을 산다", effects: [{ type: "SAVER", val: -1 }, { type: "OBSERVER", val: 1 }] }
        ]
    },
    {
        id: "E_SAVER_3",
        question: "배달 앱에서 할인을 발견",
        options: [
            { text: "직접 가지러 간다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "그냥 시킨다", effects: [{ type: "SAVER", val: -1 }] },
            { text: "아예 포기한다", effects: [] }
        ]
    },
    {
        id: "E_SAVER_4",
        question: "친구가 “천원 빌려줘”",
        options: [
            { text: "빌려준다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "기록해둔다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "거절한다", effects: [] }
        ]
    },
    {
        id: "E_SAVER_5",
        question: "가게 앞에서 시식 행사 진행 중",
        options: [
            { text: "맛보고 끝낸다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "사서 냉장고에 넣는다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "그냥 지나간다", effects: [] }
        ]
    },

    // 4. 감성·관찰형 이벤트
    {
        id: "E_OBSERVER_1",
        question: "벤치에 작은 꽃 조각이 떨어져 있다",
        options: [
            { text: "사진 찍고 기록한다", effects: [{ type: "OBSERVER", val: 2 }] },
            { text: "주워서 말려본다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 지나친다", effects: [] }
        ]
    },
    {
        id: "E_OBSERVER_2",
        question: "하늘이 이상하게 예쁜 색으로 물든다",
        options: [
            { text: "잠시 멈춰서 구경한다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "사진 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 가던 길 가버린다", effects: [] }
        ]
    },
    {
        id: "E_OBSERVER_3",
        question: "작은 카페에서 노래가 마음에 든다",
        options: [
            { text: "제목을 찾아 저장한다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "분위기만 즐긴다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "무음으로 한다", effects: [] }
        ]
    },
    {
        id: "E_OBSERVER_4",
        question: "지하철 창문에 반사되는 내 모습이 묘하게 낯설다",
        options: [
            { text: "느낌 기록 남긴다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "사진 찍어본다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "그냥 넘긴다", effects: [] }
        ]
    },
    {
        id: "E_OBSERVER_5",
        question: "길가 간판의 문구가 오늘 기분과 잘 맞는다",
        options: [
            { text: "사진 찍는다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "메모장에 적어둔다", effects: [{ type: "OBSERVER", val: 1 }] },
            { text: "지나침", effects: [] }
        ]
    },

    // 5. 도전·거래형 이벤트
    {
        id: "E_TRADER_1",
        question: "중고앱에서 “1000원 즉시 판매” 글이 올라왔다",
        options: [
            { text: "바로 구매한다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "가격 비교 후 메시지 보낸다", effects: [{ type: "TRADER", val: 2 }] },
            { text: "패스한다", effects: [] }
        ]
    },
    {
        id: "E_TRADER_2",
        question: "길거리에서 플리마켓을 발견",
        options: [
            { text: "싼 물건 찾아본다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "가격을 흥정해본다", effects: [{ type: "TRADER", val: 2 }] },
            { text: "그냥 구경만 한다", effects: [] }
        ]
    },
    {
        id: "E_TRADER_3",
        question: "1000원 뽑기 자판기 발견",
        options: [
            { text: "한 번 도전한다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "리뷰 검색해본다", effects: [{ type: "SAVER", val: 1 }] },
            { text: "그냥 지나간다", effects: [] }
        ]
    },
    {
        id: "E_TRADER_4",
        question: "친구가 “이거 천원에 살래?”",
        options: [
            { text: "상태 보고 산다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "다른 조건 제안한다", effects: [{ type: "TRADER", val: 2 }] },
            { text: "바로 거절한다", effects: [] }
        ]
    },
    {
        id: "E_TRADER_5",
        question: "SNS에서 ‘1000원으로 돈 불리기 챌린지’를 본다",
        options: [
            { text: "바로 참가한다", effects: [{ type: "TRADER", val: 1 }] },
            { text: "저장만 해둔다", effects: [] },
            { text: "부정확한 정보인지 확인해본다", effects: [{ type: "SAVER", val: 1 }] }
        ]
    }
];


// State
const state = {
    username: '',
    major: '',
    currentQuestionIndex: 0,
    testSequence: [], // Will hold the mixed list of Questions and Events
    scores: {
        MAKER: 0,
        EXPLORER: 0,
        SAVER: 0,
        OBSERVER: 0,
        TRADER: 0
    }
};

// DOM Elements
const pages = {
    intro: document.getElementById('intro-page'),
    question: document.getElementById('question-page'),
    result: document.getElementById('result-page')
};

const inputs = {
    username: document.getElementById('username'),
    major: document.getElementById('major')
};

const questionUI = {
    text: document.getElementById('question-text'),
    num: document.getElementById('q-num'), // Keeping for legacy if needed, but we will use header
    header: document.querySelector('.question-number'), // NEW: Target the parent to control "Q" prefix
    container: document.getElementById('options-container'),
    progress: document.getElementById('progress-fill')
};

const resultUI = {
    name: document.getElementById('result-name'),
    title: document.getElementById('result-title'),
    badge: document.querySelector('.badge-icon'),
    desc: document.getElementById('result-desc'),
    activity: document.getElementById('result-activity'),
    captureArea: document.getElementById('result-capture-area')
};

// Functions
function showPage(pageId) {
    console.log(`Switching to page: ${pageId}`);

    const pages = {
        intro: document.getElementById('intro-page'),
        question: document.getElementById('question-page'),
        result: document.getElementById('result-page')
    };

    // 1. Hide ALL pages first
    Object.values(pages).forEach(page => {
        if (page) {
            page.classList.remove('active');
            page.classList.add('hidden');
        }
    });

    // 2. Unhide and activate the target page
    const target = pages[pageId];
    if (target) {
        target.classList.remove('hidden');
        // Small delay to allow display:block before adding 'active' for transition
        setTimeout(() => {
            target.classList.add('active');
            console.log(`${pageId} should now be active.`);
        }, 50);
    } else {
        console.error(`Page element with ID '${pageId}-page' not found!`);
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function generateTestSequence() {
    // 1. Get 1 random event from each category
    const categories = ['MAKER', 'EXPLORER', 'SAVER', 'OBSERVER', 'TRADER'];
    const selectedEvents = [];

    categories.forEach(cat => {
        // Find all events for this category (id starts with E_CATEGORY)
        const catEvents = EVENT_POOL.filter(e => e.id.startsWith(`E_${cat}`));
        // Pick one random
        if (catEvents.length > 0) {
            const randomEvent = catEvents[Math.floor(Math.random() * catEvents.length)];
            selectedEvents.push(randomEvent);
        }
    });

    // 2. Shuffle the 5 selected events
    const shuffledEvents = shuffle(selectedEvents);

    // 3. Mix with QUESTIONS
    // Insert them at fixed positions to intersperse
    // Q1, Q2, E1, Q3, E2, Q4, E3, Q5, E4, Q6, E5, Q7, Q8.
    const sequence = [...QUESTIONS];

    // Insert events (reverse order to keep indices stable)
    // Indexes: 2, 3, 4, 5, 6
    if (shuffledEvents.length >= 5) {
        sequence.splice(6, 0, shuffledEvents[4]);
        sequence.splice(5, 0, shuffledEvents[3]);
        sequence.splice(4, 0, shuffledEvents[2]);
        sequence.splice(3, 0, shuffledEvents[1]);
        sequence.splice(2, 0, shuffledEvents[0]);
    }

    return sequence;
}

function startTest() {
    console.log('Starting test...');
    try {
        const nameInput = document.getElementById('username');
        const majorInput = document.getElementById('major');

        if (!nameInput || !majorInput) {
            console.error('Input elements not found!');
            showToast('오류: 입력창을 찾을 수 없습니다.');
            return;
        }

        const name = nameInput.value.trim();
        const major = majorInput.value.trim();

        if (!name || !major) {
            showToast('이름과 학과를 모두 입력해주세요! ✍️');
            return;
        }

        state.username = name;
        state.major = major;
        state.currentQuestionIndex = 0;
        // Reset scores
        Object.keys(state.scores).forEach(key => state.scores[key] = 0);

        // Generate new sequence
        state.testSequence = generateTestSequence();

        if (!state.testSequence || state.testSequence.length === 0) {
            throw new Error('Test sequence generation failed');
        }

        renderQuestion();
        showPage('question');
    } catch (e) {
        console.error('Error starting test:', e);
        showToast('테스트 시작 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
}

function renderQuestion() {
    const item = state.testSequence[state.currentQuestionIndex];
    const isEvent = item.id.toString().startsWith('E');

    // UI Updates for Event Mode
    if (isEvent) {
        document.body.classList.add('event-mode');
        // Extract type from ID (E_MAKER_1 -> MAKER)
        const typeMatch = item.id.match(/^E_([A-Z]+)_\d+/);
        const eventType = typeMatch ? typeMatch[1] : 'UNKNOWN';

        // ✨ Dynamic Title from EVENT_TITLES
        const titleText = EVENT_TITLES[eventType] || "✨ EVENT STAGE ✨";
        // REPLACE entire header content to avoid "Q" overlapping
        questionUI.header.innerHTML = `<span class="event-badge">${titleText}</span>`;
        questionUI.text.style.fontWeight = 'bold';
    } else {
        document.body.classList.remove('event-mode');
        // Restore standard Q format
        questionUI.header.innerHTML = `Q<span id="q-num">${state.currentQuestionIndex + 1}</span>`;
        questionUI.text.style.fontWeight = 'normal';
    }

    questionUI.text.textContent = item.question;

    // Clear previous options
    questionUI.container.innerHTML = '';

    // Create buttons
    item.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (isEvent) btn.classList.add('event-option');

        btn.textContent = opt.text;

        // Handle click
        btn.onclick = () => {
            // Check if it's a standard question (legacy type field) or event (effects array)
            if (opt.type) {
                // Standard Question: Simple +1
                handleAnswer([{ type: opt.type, val: 1 }]);
            } else if (opt.effects) {
                // Event: Complex effects
                handleAnswer(opt.effects);
            } else {
                // Fallback (e.g. no effect)
                handleAnswer([]);
            }
        };
        questionUI.container.appendChild(btn);
    });

    // Update progress
    const progress = ((state.currentQuestionIndex + 1) / state.testSequence.length) * 100;
    questionUI.progress.style.width = `${progress}%`;
}

function handleAnswer(effects) {
    // Apply effects
    effects.forEach(effect => {
        if (state.scores.hasOwnProperty(effect.type)) {
            state.scores[effect.type] += effect.val;
        }
    });

    if (state.currentQuestionIndex < state.testSequence.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        // Clear event mode
        document.body.classList.remove('event-mode');
        showResult();
    }
}

function getResultType() {
    // Find key with max score
    return Object.keys(state.scores).reduce((a, b) => state.scores[a] > state.scores[b] ? a : b);
}

function showResult() {
    const typeKey = getResultType();
    const resultData = TYPES[typeKey];

    resultUI.name.textContent = `${state.major} ${state.username}`;
    resultUI.title.textContent = resultData.title;
    resultUI.desc.innerText = resultData.desc; // Use innerText for newlines

    // Render List of Activities
    let activitiesHtml = "";
    if (Array.isArray(resultData.activities)) {
        activitiesHtml = `<ul style="text-align: left; padding-left: 20px; margin-top: 10px;">
            ${resultData.activities.map(act => `<li style="margin-bottom: 8px;">${act}</li>`).join('')}
        </ul>`;
    } else {
        activitiesHtml = resultData.activity; // Fallback
    }

    // Add Encouraging Message to separate element
    const msgElement = document.getElementById('encouraging-msg');
    if (msgElement) {
        msgElement.innerHTML = `하지만 가장 중요한 건,<br>여러분이 진짜 하고 싶은 걸 선택하는 거예요! ✨`;
    }

    resultUI.activity.innerHTML = activitiesHtml;


    // Icon mapping 
    const icons = {
        MAKER: '🎨',
        EXPLORER: '🧭',
        SAVER: '💰',
        OBSERVER: '📸',
        TRADER: '⚖️'
    };
    resultUI.badge.textContent = icons[typeKey];

    showPage('result');
}

function copyResult() {
    // For copy, we might just join activities
    const typeKey = getResultType();
    const resultData = TYPES[typeKey];
    let acts = "";
    if (Array.isArray(resultData.activities)) {
        acts = resultData.activities.join("\n");
    } else {
        acts = resultData.activity;
    }

    const text = `[천원 챌린지 유형 테스트]\n${state.major} ${state.username}님의 유형은?\n\n✨ ${resultUI.title.textContent}\n\n${resultUI.desc.innerText}\n\n[추천 챌린지]\n${acts}\n\n하지만 가장 중요한 건, 여러분이 진짜 하고 싶은 걸 선택하는 거예요! ✨\n\n👇 당신도 지금 도전해보세요!\nhttps://badwordfilter.github.io/1000-won-challenge/`;
    navigator.clipboard.writeText(text).then(() => {
        showToast('결과가 클립보드에 복사되었습니다! 📋');
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;

    document.body.appendChild(toast);

    // Trigger reflow
    void toast.offsetWidth;

    // Show
    toast.classList.add('show');

    // Hide and remove after 2.5s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2500);
}


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-btn').addEventListener('click', startTest);
    document.getElementById('copy-btn').addEventListener('click', copyResult);
    // document.getElementById('save-btn').addEventListener('click', saveImage); // Removed
    document.getElementById('retry-btn').addEventListener('click', () => {
        inputs.username.value = '';
        inputs.major.value = '';
        showPage('intro');
    });
});
