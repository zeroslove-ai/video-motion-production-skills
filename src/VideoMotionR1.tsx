import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const P = {
  bg: '#0B0D12',
  fg: '#F5F1E8',
  accent: '#B9FF66',
  muted: '#8A919E',
  card: '#171A21',
  card2: '#20242D',
  line: '#323846',
};

const fontFamily = 'Malgun Gothic, Noto Sans KR, Arial, sans-serif';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const Grid: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      backgroundSize: '64px 64px',
      opacity: 0.45,
    }}
  />
);

const Chrome: React.FC<{label: string}> = ({label}) => (
  <>
    <div style={{position: 'absolute', left: 84, top: 58, color: P.muted, fontSize: 24, letterSpacing: 4, fontWeight: 700}}>
      VIDEO MOTION / R1
    </div>
    <div style={{position: 'absolute', right: 84, top: 58, color: P.muted, fontSize: 22, letterSpacing: 2}}>
      {label}
    </div>
  </>
);

const Scene: React.FC<{children: React.ReactNode; label: string}> = ({children, label}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], clamp);
  return (
    <AbsoluteFill style={{backgroundColor: P.bg, color: P.fg, fontFamily, overflow: 'hidden'}}>
      <Grid />
      <Chrome label={label} />
      {children}
    </AbsoluteFill>
  );
};

const Title: React.FC<{kicker: string; title: React.ReactNode; sub?: string}> = ({kicker, title, sub}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame, fps, config: {damping: 16, stiffness: 120, mass: 0.8}});
  const y = interpolate(s, [0, 1], [70, 0]);
  return (
    <div style={{position: 'absolute', left: 120, right: 120, top: 190}}>
      <div style={{fontSize: 28, letterSpacing: 5, color: P.accent, fontWeight: 800, marginBottom: 28}}>{kicker}</div>
      <div style={{fontSize: 92, lineHeight: 1.08, fontWeight: 900, letterSpacing: -5, transform: `translateY(${y}px)`, opacity: s}}>
        {title}
      </div>
      {sub ? <div style={{marginTop: 30, fontSize: 34, lineHeight: 1.5, color: P.muted, maxWidth: 1250}}>{sub}</div> : null}
    </div>
  );
};

const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const width = interpolate(frame, [18, 55], [0, 1050], clamp);
  const dot = spring({frame: Math.max(0, frame - 36), fps: 30, config: {damping: 12}});
  return (
    <Scene label="01 / HOOK">
      <Title
        kicker="EDITORIAL EXPLAINER"
        title={<>AI 3D 캐릭터 제작은<br /><span style={{color: P.accent}}>어떻게 빨라지는가</span></>}
        sub="모델 하나의 마법보다, 제작 단계를 연결하는 구조가 먼저 바뀌고 있다."
      />
      <div style={{position: 'absolute', left: 120, bottom: 165, width, height: 8, background: P.accent, borderRadius: 99}} />
      <div style={{position: 'absolute', left: 1180, bottom: 126, width: 140, height: 140, borderRadius: 999, background: P.accent, transform: `scale(${dot})`, boxShadow: '0 0 100px rgba(185,255,102,0.3)'}} />
    </Scene>
  );
};

const PipelineCard: React.FC<{name: string; index: number; frame: number}> = ({name, index, frame}) => {
  const local = Math.max(0, frame - index * 12);
  const s = spring({frame: local, fps: 30, config: {damping: 18, stiffness: 150}});
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
      <div style={{
        width: 245,
        height: 180,
        borderRadius: 28,
        background: P.card,
        border: '1px solid ' + P.line,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 28,
        transform: `translateY(${interpolate(s,[0,1],[48,0])}px)`,
        opacity: s,
      }}>
        <div style={{fontSize: 22, color: P.muted}}>0{index + 1}</div>
        <div style={{fontSize: 38, fontWeight: 900}}>{name}</div>
      </div>
      {index < 4 ? <div style={{fontSize: 48, color: P.muted, opacity: s}}>→</div> : null}
    </div>
  );
};

const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const stages = ['원화', '모델링', 'UV·재질', '리깅', '수정'];
  return (
    <Scene label="02 / SEQUENTIAL">
      <Title kicker="BEFORE" title={<>기존 제작은 <span style={{color: P.accent}}>단계가 줄지어</span> 있었다</>} />
      <div style={{position: 'absolute', left: 120, right: 120, top: 535, display: 'flex', alignItems: 'center'}}>
        {stages.map((s, i) => <PipelineCard key={s} name={s} index={i} frame={frame} />)}
      </div>
      <div style={{position: 'absolute', left: 120, bottom: 105, color: P.muted, fontSize: 30}}>
        한 단계가 멈추면 다음 단계도 함께 멈춘다.
      </div>
    </Scene>
  );
};

const Node: React.FC<{x: number; y: number; label: string; delay: number; frame: number; accent?: boolean}> = ({x, y, label, delay, frame, accent}) => {
  const s = spring({frame: Math.max(0, frame - delay), fps: 30, config: {damping: 14, stiffness: 130}});
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 260,
      height: 110,
      borderRadius: 24,
      border: '1px solid ' + (accent ? P.accent : P.line),
      background: accent ? P.accent : P.card,
      color: accent ? P.bg : P.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      fontWeight: 900,
      transform: `scale(${0.8 + s * 0.2})`,
      opacity: s,
      zIndex: 2,
    }}>
      {label}
    </div>
  );
};

const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [18, 65], [0, 1], clamp);
  const nodes = [
    {x: 270, y: 565, label: '원화 분석'},
    {x: 615, y: 680, label: '3D 초안'},
    {x: 1045, y: 680, label: '리깅 검사'},
    {x: 1390, y: 565, label: 'QA·수정'},
  ];
  return (
    <Scene label="03 / AGENT LOOP">
      <Title kicker="AFTER" title={<>반복 작업은 <span style={{color: P.accent}}>에이전트가 연결</span>한다</>} sub="사람이 모든 클릭을 직접 수행하는 대신, 작업 단위와 검수 규칙을 연결한다." />
      <svg width="1920" height="1080" style={{position: 'absolute', inset: 0, opacity: draw}}>
        <path d="M400 620 C620 430, 760 500, 880 540" fill="none" stroke={P.line} strokeWidth="4" />
        <path d="M745 735 C830 640, 875 610, 900 590" fill="none" stroke={P.line} strokeWidth="4" />
        <path d="M1175 735 C1080 640, 1030 610, 1005 590" fill="none" stroke={P.line} strokeWidth="4" />
        <path d="M1520 620 C1300 430, 1160 500, 1040 540" fill="none" stroke={P.line} strokeWidth="4" />
      </svg>
      <Node x={830} y={485} label="PRODUCTION AGENT" delay={0} frame={frame} accent />
      {nodes.map((n, i) => <Node key={n.label} {...n} delay={18 + i * 10} frame={frame} />)}
    </Scene>
  );
};

const Column: React.FC<{title: string; items: string[]; accent?: boolean; delay: number}> = ({title, items, accent, delay}) => {
  const frame = useCurrentFrame();
  const s = spring({frame: Math.max(0, frame - delay), fps: 30, config: {damping: 18}});
  return (
    <div style={{
      width: 760,
      minHeight: 500,
      borderRadius: 36,
      padding: 52,
      background: accent ? 'rgba(185,255,102,0.08)' : P.card,
      border: '1px solid ' + (accent ? P.accent : P.line),
      transform: `translateY(${interpolate(s,[0,1],[40,0])}px)`,
      opacity: s,
    }}>
      <div style={{fontSize: 26, letterSpacing: 4, color: accent ? P.accent : P.muted, fontWeight: 800, marginBottom: 34}}>{title}</div>
      {items.map((x) => <div key={x} style={{fontSize: 42, fontWeight: 800, padding: '22px 0', borderBottom: '1px solid ' + P.line}}>• {x}</div>)}
    </div>
  );
};

const Scene4: React.FC = () => (
  <Scene label="04 / ROLE SPLIT">
    <Title kicker="ROLE SPLIT" title={<>사람은 <span style={{color: P.accent}}>판단</span>하고, 시스템은 <span style={{color: P.accent}}>반복</span>한다</>} />
    <div style={{position: 'absolute', left: 120, right: 120, top: 470, display: 'flex', gap: 48}}>
      <Column title="HUMAN" delay={4} items={['캐릭터 정체성 결정', '품질 기준 설정', '최종 선택']} />
      <Column title="SYSTEM" accent delay={16} items={['반복 생성·정리', '규칙 기반 검사', '수정 루프 실행']} />
    </div>
  </Scene>
);

const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const stages = ['PROMPT', 'STORYBOARD', 'SCENE', 'RENDERER', 'QA'];
  return (
    <Scene label="05 / ARCHITECTURE">
      <Title kicker="SYSTEM DESIGN" title={<>좋은 자동화는 <span style={{color: P.accent}}>모델보다 구조가 먼저</span>다</>} sub="렌더러는 바뀌어도, 스토리보드와 장면 계약은 남는다." />
      <div style={{position: 'absolute', left: 120, right: 120, top: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        {stages.map((name, i) => {
          const s = spring({frame: Math.max(0, frame - i * 12), fps: 30, config: {damping: 18}});
          return (
            <React.Fragment key={name}>
              <div style={{
                width: 270,
                height: 150,
                borderRadius: 28,
                background: i === 3 ? P.accent : P.card,
                color: i === 3 ? P.bg : P.fg,
                border: '1px solid ' + (i === 3 ? P.accent : P.line),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                fontWeight: 900,
                letterSpacing: 2,
                opacity: s,
                transform: `translateX(${interpolate(s,[0,1],[60,0])}px)`,
              }}>{name}</div>
              {i < stages.length - 1 ? <div style={{fontSize: 42, color: P.muted, opacity: s}}>→</div> : null}
            </React.Fragment>
          );
        })}
      </div>
    </Scene>
  );
};

const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({frame, fps: 30, config: {damping: 14, stiffness: 110}});
  return (
    <Scene label="06 / PROOF">
      <div style={{position: 'absolute', left: 120, top: 215, fontSize: 28, letterSpacing: 5, color: P.accent, fontWeight: 900}}>PROOF RUN</div>
      <div style={{position: 'absolute', left: 120, top: 300, fontSize: 118, lineHeight: 0.98, fontWeight: 950, letterSpacing: -7, transform: `translateY(${interpolate(s,[0,1],[80,0])}px)`, opacity: s}}>
        VIDEO<br /><span style={{color: P.accent}}>MOTION R1</span>
      </div>
      <div style={{position: 'absolute', right: 120, top: 300, width: 700, display: 'grid', gap: 22}}>
        {['유료 생성 API 0회', 'Remotion + SVG', '30초 · 1080p · 30fps', '장면 단위 교체 가능'].map((t, i) => {
          const p = spring({frame: Math.max(0, frame - 12 - i * 8), fps: 30, config: {damping: 18}});
          return <div key={t} style={{background: P.card, border: '1px solid ' + P.line, borderRadius: 24, padding: '25px 30px', fontSize: 32, fontWeight: 800, opacity: p, transform: `translateX(${interpolate(p,[0,1],[40,0])}px)`}}>✓ {t}</div>;
        })}
      </div>
      <div style={{position: 'absolute', left: 120, bottom: 110, color: P.muted, fontSize: 28}}>Higgsfield는 나중에 선택 가능한 renderer adapter로만 추가한다.</div>
    </Scene>
  );
};

export const VideoMotionR1: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: P.bg}}>
      <Sequence from={0} durationInFrames={105}><Scene1 /></Sequence>
      <Sequence from={105} durationInFrames={165}><Scene2 /></Sequence>
      <Sequence from={270} durationInFrames={180}><Scene3 /></Sequence>
      <Sequence from={450} durationInFrames={165}><Scene4 /></Sequence>
      <Sequence from={615} durationInFrames={180}><Scene5 /></Sequence>
      <Sequence from={795} durationInFrames={105}><Scene6 /></Sequence>
    </AbsoluteFill>
  );
};
