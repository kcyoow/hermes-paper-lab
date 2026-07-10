export type MatchConfidence = '확정' | '유력' | '후보 다수';

export interface IcmlPaper {
  memo: string;
  title: string;
  koreanTitle: string;
  description: string;
  category: 'LLM' | 'Optimization' | 'Privacy' | 'Graphs' | 'Interpretability' | 'Federated' | 'RL' | 'Fairness';
  presentation: 'Spotlight' | 'Poster' | 'Collection';
  confidence: MatchConfidence;
  openreview?: string;
  arxiv?: string;
  arxivId?: string;
  note?: string;
  alternatives?: string[];
}

export const icml2026Papers: IcmlPaper[] = [
  {
    memo: 'FedEBA',
    title: 'FedEBA+: Towards Fair and Effective Federated Learning via Entropy-Based Model',
    koreanTitle: 'FedEBA+: 엔트로피 기반 모델로 공정하고 효과적인 연합학습 만들기',
    description: '클라이언트별 성능 불균형을 줄이면서 전체 연합 모델의 효율을 유지하도록 엔트로피 기반 집계를 설계합니다.',
    category: 'Federated', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=R8eRV29kGt', arxiv: 'https://arxiv.org/abs/2301.12407', arxivId: '2301.12407'
  },
  {
    memo: 'WeDLM',
    title: 'WeDLM: Reconciling Diffusion Language Models with Standard Causal Attention for Fast Inference',
    koreanTitle: 'WeDLM: 확산 언어모델과 표준 인과적 어텐션을 결합한 빠른 추론',
    description: 'Diffusion LM의 병렬 생성 장점을 유지하면서 causal attention과 KV cache를 활용할 수 있게 만드는 추론 구조입니다.',
    category: 'LLM', presentation: 'Spotlight', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=QwtmbKAOZU', arxiv: 'https://arxiv.org/abs/2512.22737', arxivId: '2512.22737'
  },
  {
    memo: 'M-CBEs',
    title: 'Mixture of Concept Bottleneck Experts',
    koreanTitle: '개념 병목 전문가 혼합 모델',
    description: '서로 다른 concept expert를 혼합해 복잡한 예측을 설명 가능한 중간 개념과 연결합니다.',
    category: 'Interpretability', presentation: 'Spotlight', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=Jj8Vec8qSs', arxiv: 'https://arxiv.org/abs/2602.02886', arxivId: '2602.02886'
  },
  {
    memo: 'Differentiable',
    title: 'Differentiable Optimization Layers for Guaranteed Fairness in Deep Learning',
    koreanTitle: '보장된 공정성을 위한 미분 가능한 최적화 계층',
    description: '예측 모델 안에 미분 가능한 최적화 계층을 넣어 정해진 fairness 제약을 직접 만족시키는 방법을 연구합니다.',
    category: 'Fairness', presentation: 'Poster', confidence: '유력',
    openreview: 'https://openreview.net/forum?id=9SLQACsSbw', arxiv: 'https://arxiv.org/abs/2605.17118', arxivId: '2605.17118',
    note: '메모 앞뒤가 해석가능성·공정성 논문이어서 가장 유력한 후보로 배치했습니다.'
  },
  {
    memo: 'MAFE',
    title: 'MAFE: Enabling Equitable Algorithm Design in Multi-Agent Multi-Stage Decision-Making Systems',
    koreanTitle: 'MAFE: 다중 에이전트·다단계 의사결정 시스템의 공정한 알고리즘 설계',
    description: '여러 행위자와 단계가 얽힌 의사결정에서 공정성 목표가 어떻게 전파되고 충돌하는지를 모델링합니다.',
    category: 'Fairness', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=viOFFYQPgL', arxiv: 'https://arxiv.org/abs/2502.18534', arxivId: '2502.18534'
  },
  {
    memo: 'DP-SGD',
    title: 'SlaClip: Gradient Norm Slacks can be Indicator for Adaptive Clipping in DP-SGD',
    koreanTitle: 'SlaClip: DP-SGD의 적응형 클리핑을 위한 그래디언트 노름 여유분',
    description: '고정 clipping threshold 대신 gradient norm slack을 신호로 사용해 개인정보보호 학습의 효용을 높입니다.',
    category: 'Privacy', presentation: 'Spotlight', confidence: '후보 다수',
    openreview: 'https://openreview.net/forum?id=48suUeYKdb',
    note: '제목에 DP-SGD가 직접 들어가는 Spotlight라 대표 후보로 표시했습니다.',
    alternatives: ['Efficient DP-SGD for LLMs with Randomized Clipping — arXiv:2605.24879']
  },
  {
    memo: 'PRISM',
    title: 'PRISM: Gauge-Invariant Tangent-Space Differentially Private LoRA',
    koreanTitle: 'PRISM: 게이지 불변 접공간에서 수행하는 차등 개인정보보호 LoRA',
    description: 'LoRA의 parameterization 중복으로 생기는 불필요한 DP 잡음을 줄이기 위해 tangent space에서 업데이트합니다.',
    category: 'Privacy', presentation: 'Spotlight', confidence: '유력',
    openreview: 'https://openreview.net/forum?id=SiCjKmArjQ', arxiv: 'https://arxiv.org/abs/2606.00944', arxivId: '2606.00944',
    note: '바로 앞 메모가 DP-SGD이므로 여러 PRISM 논문 가운데 이 논문일 가능성이 가장 높습니다.'
  },
  {
    memo: 'Expert level',
    title: 'The Expert Strikes Back: Interpreting Mixture-of-Experts Language Models at Expert Level',
    koreanTitle: '전문가가 돌아왔다: MoE 언어모델을 개별 전문가 수준에서 해석하기',
    description: 'Mixture-of-Experts 모델을 전체 모델이 아니라 각 expert의 역할과 활성화 패턴 수준에서 분석합니다.',
    category: 'Interpretability', presentation: 'Poster', confidence: '후보 다수',
    openreview: 'https://openreview.net/forum?id=npMOaMWWrW', arxiv: 'https://arxiv.org/abs/2604.02178', arxivId: '2604.02178',
    alternatives: ['CVE-Factory: Scaling Expert-Level Agentic Tasks for Code Security Vulnerability', 'GEMQ: Global Expert-Level Mixed-Precision Quantization for MoE LLMs']
  },
  {
    memo: 'Heterogeneous RAG',
    title: 'Towards Whole-corpus Reconstruction of Heterogeneous RAG Knowledge Bases',
    koreanTitle: '이질적인 RAG 지식베이스의 전체 코퍼스 복원을 향하여',
    description: '서로 다른 형식의 RAG 지식베이스에서 전체 corpus가 어느 정도 복원될 수 있는지 개인정보 위험을 분석합니다.',
    category: 'Privacy', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=x61zDYEZ91'
  },
  {
    memo: 'Multipole',
    title: 'Multipole Semantic Attention: A Fast Approximation of Softmax Attention for Pretraining',
    koreanTitle: 'Multipole Semantic Attention: 사전학습을 위한 빠른 Softmax Attention 근사',
    description: 'multipole expansion 아이디어로 softmax attention을 근사해 긴 문맥 사전학습의 계산량을 줄입니다.',
    category: 'LLM', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=2oft1bznyx', arxiv: 'https://arxiv.org/abs/2509.10406', arxivId: '2509.10406'
  },
  {
    memo: 'Self distill',
    title: 'Self-Distilled Reasoner: On-Policy Self-Distillation for Large Language Models',
    koreanTitle: '자기 증류 추론기: 대규모 언어모델을 위한 On-Policy Self-Distillation',
    description: '모델이 현재 정책으로 생성한 추론 궤적을 다시 학습 신호로 사용해 reasoning 능력을 개선합니다.',
    category: 'LLM', presentation: 'Poster', confidence: '후보 다수',
    openreview: 'https://openreview.net/forum?id=Jpxfof0EaS', arxiv: 'https://arxiv.org/abs/2601.18734', arxivId: '2601.18734',
    alternatives: ['Self-Distillation Enables Continual Learning', 'Making Expert Reasoning Learnable with Self-Distillation', 'Reinforcement Learning via Self-Distillation']
  },
  {
    memo: 'Singularity-aware optimization',
    title: 'Singularity-aware Optimization via Randomized Geometric Probing: Towards Stable Non-smooth Optimization',
    koreanTitle: '무작위 기하 프로빙을 이용한 특이점 인식 최적화',
    description: '비매끄러운 목적함수의 singularity를 기하학적으로 감지해 gradient 기반 최적화의 불안정을 줄입니다.',
    category: 'Optimization', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=jYf7VrKL6x', arxiv: 'https://arxiv.org/abs/2605.29547', arxivId: '2605.29547'
  },
  {
    memo: 'Dynamic graph',
    title: 'Adaptive Memory Retention in Dynamic Graphs',
    koreanTitle: '동적 그래프에서의 적응형 메모리 유지',
    description: '시간에 따라 변하는 그래프에서 과거 정보를 일률적으로 보존하지 않고 변화 양상에 맞게 유지율을 조절합니다.',
    category: 'Graphs', presentation: 'Spotlight', confidence: '후보 다수',
    openreview: 'https://openreview.net/forum?id=x7NGYPNlgs',
    alternatives: ['Towards the Explainability of Temporal Graph Networks via Memory Backtracking and Topological Attribution', 'PromptDyG: Test-Time Prompt Adaptation on Dynamic Graphs']
  },
  {
    memo: 'GNN',
    title: 'S³GNN: Efficient Global Mixing and Local Message Passing for Long-Range Graph Learning',
    koreanTitle: 'S³GNN: 장거리 그래프 학습을 위한 효율적인 전역 혼합과 지역 메시지 전달',
    description: '지역 message passing과 전역 mixing을 결합해 긴 거리 의존성을 효율적으로 처리하는 GNN입니다.',
    category: 'Graphs', presentation: 'Collection', confidence: '후보 다수',
    openreview: 'https://openreview.net/forum?id=9SCVnAxoKK', arxiv: 'https://arxiv.org/abs/2605.23467', arxivId: '2605.23467',
    note: 'GNN이라는 메모만으로는 단일 논문을 특정할 수 없어 Spotlight 대표 후보를 연결했습니다.',
    alternatives: ['Which Algorithms Can Graph Neural Networks Learn?', 'Expressive Graph Neural Networks via Equivariant Use of Noise', 'Learning to Execute Graph Algorithms Exactly with Graph Neural Networks']
  },
  {
    memo: 'PhenoBrain',
    title: 'PhenoBrain: Phenotype-Conditioned Long-Range Communication for Multi-Modal Brain Network Analysis',
    koreanTitle: 'PhenoBrain: 다중모달 뇌 네트워크 분석을 위한 표현형 조건부 장거리 통신',
    description: 'phenotype 정보를 조건으로 사용해 멀리 떨어진 뇌 영역 간 상호작용을 그래프 모델에서 학습합니다.',
    category: 'Graphs', presentation: 'Spotlight', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=9NqKL9QQ4a'
  },
  {
    memo: 'BeaconKV',
    title: 'BeaconKV: Key-Value Cache Compression Guided by Beacon Queries for Efficient Large Reasoning Model Inference',
    koreanTitle: 'BeaconKV: Beacon Query가 안내하는 대규모 추론모델 KV Cache 압축',
    description: 'beacon query로 중요한 cache entry를 찾아 긴 reasoning 과정의 메모리 사용량을 줄입니다.',
    category: 'LLM', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=bgAbffQCrL'
  },
  {
    memo: 'DynTS',
    title: 'Dynamic Thinking-Token Selection for Efficient Reasoning in Large Reasoning Models',
    koreanTitle: '대규모 추론모델의 효율적 reasoning을 위한 동적 Thinking-Token 선택',
    description: '추론 중 필요한 thinking token만 동적으로 남겨 계산량과 KV cache 비용을 함께 줄입니다.',
    category: 'LLM', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=sjK6Ii8TWs', arxiv: 'https://arxiv.org/abs/2601.18383', arxivId: '2601.18383'
  },
  {
    memo: 'Lazy attention',
    title: 'LazyAttention: Efficient Retrieval-Augmented Generation with Deferred Positional Encoding',
    koreanTitle: 'LazyAttention: 위치 인코딩을 지연하는 효율적인 RAG',
    description: '검색 문서의 positional encoding을 실제 attention이 필요한 시점까지 미뤄 RAG 계산을 절약합니다.',
    category: 'LLM', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=M9kHwqreN9', arxiv: 'https://arxiv.org/abs/2606.04302', arxivId: '2606.04302'
  },
  {
    memo: 'ReJump',
    title: 'ReJump: A Tree-Jump Representation for Analyzing and Improving LLM Reasoning',
    koreanTitle: 'ReJump: LLM 추론을 분석·개선하기 위한 Tree-Jump 표현',
    description: '추론을 선형 chain이 아니라 분기와 되돌아가기를 포함한 tree-jump 구조로 표현합니다.',
    category: 'LLM', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=hlUgEwl3Du', arxiv: 'https://arxiv.org/abs/2512.00831', arxivId: '2512.00831'
  },
  {
    memo: 'Think deep',
    title: 'Think Deep, Not Just Long: Measuring LLM Reasoning Effort via Deep-Thinking Tokens',
    koreanTitle: '길게가 아니라 깊게 생각하라: Deep-Thinking Token으로 측정하는 LLM 추론 노력',
    description: '추론 길이만 세는 대신 실제로 깊은 계산이 발생하는 token을 식별해 reasoning effort를 측정합니다.',
    category: 'LLM', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=PRSE0U5eGT', arxiv: 'https://arxiv.org/abs/2602.13517', arxivId: '2602.13517'
  },
  {
    memo: 'GIPO',
    title: 'GIPO: Gaussian Importance Sampling Policy Optimization',
    koreanTitle: 'GIPO: 가우시안 중요도 샘플링 정책 최적화',
    description: 'PPO의 hard clipping 대신 Gaussian importance weighting을 사용해 정책 업데이트를 부드럽게 제어합니다.',
    category: 'RL', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=Q5DHzFVOxf', arxiv: 'https://arxiv.org/abs/2603.03955', arxivId: '2603.03955'
  },
  {
    memo: 'AdamO',
    title: 'AdamO: A Collapse-Suppressed Optimizer for Offline RL',
    koreanTitle: 'AdamO: Offline RL의 붕괴를 억제하는 최적화기',
    description: 'offline reinforcement learning에서 가치 함수와 TD 학습이 붕괴하는 현상을 억제하도록 Adam을 수정합니다.',
    category: 'RL', presentation: 'Poster', confidence: '확정',
    openreview: 'https://openreview.net/forum?id=mMlt3tQ7Ot', arxiv: 'https://arxiv.org/abs/2605.01968', arxivId: '2605.01968'
  }
];

export const confirmedCount = icml2026Papers.filter((paper) => paper.confidence === '확정').length;
