# Paperroom

논문을 짧게 요약해 버리지 않고, 원문의 흐름과 주장 강도를 유지하면서 한국어로 끝까지 읽는 개인 논문 서재입니다.

## Live site

- GitHub Pages: https://kcyoow.github.io/hermes-paper-lab/
- Repository: https://github.com/kcyoow/hermes-paper-lab

## 현재 구성

- 전체 흐름 해설 2편
  - Synthetic Computers at Scale for Long-Horizon Productivity Simulation
  - VB-LoRA: Extreme Parameter Efficient Fine-Tuning with Vector Banks
- ICML 2026 현장 메모 22개 복원 컬렉션
- 모바일 우선 반응형 레이아웃
- 읽기 진행률, 글자 크기, 본문 폭, 라이트/다크 테마
- 원문 Figure와 수식 해설을 위한 장문 리더

## 편집 원칙

1. 정확한 번역과 사이트 해설을 분리합니다.
2. 초록, 서론, 방법, 실험, 결론, 부록의 순서를 보존합니다.
3. 숫자, 수식 기호, 그림·표 번호, 비교 조건을 임의로 바꾸지 않습니다.
4. `may`, `suggest`, `guarantee`처럼 저자의 주장 강도를 보존합니다.
5. 단일 논문으로 특정되지 않는 메모는 `유력` 또는 `후보 다수`로 표시합니다.
6. 논문 원문을 최종 기준으로 삼고 OpenReview/arXiv/PMLR 링크를 함께 둡니다.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

`main` 브랜치에 push하면 GitHub Actions가 Astro 정적 사이트를 빌드하고 GitHub Pages에 배포합니다.
