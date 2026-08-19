/*
  Design philosophy: Atlas Clínico Editorial.
  This page uses a marfim canvas, deep teal navigation, violet/coral laboratory codes,
  editorial evidence labels, and a calm investigation rhythm for undergraduate Nursing
  and Physiotherapy students.
*/
import { useMemo, useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  FlaskConical,
  HeartPulse,
  Microscope,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const ASSETS = {
  logo: "/assets/batalha-invisivel-mark_af4f2e67.svg",
  hero: "/assets/hero-atlas-bacteriano_6a01db9d.webp",
  evidence: "/assets/parede-gram-comparativa-pt_1256c1a1.png",
  morphology: "/assets/morfologia-comparativa-pt_73eb1b90.png",
  wall: "/assets/parede-gram-comparativa-pt_1256c1a1.png",
  wallDetail: "/assets/gram-wall-detail_a9c3386a.webp",
};

const bacteria = [
  {
    number: "01",
    name: "Staphylococcus aureus",
    short: "S. aureus",
    finding: "Ferida do calcanhar",
    morphology: "Cocos em cachos",
    gram: "Gram-positiva",
    color: "violet",
    note: "Forma esférica e agrupamento em cachos. A pista visual é roxa.",
  },
  {
    number: "02",
    name: "Streptococcus pneumoniae",
    short: "S. pneumoniae",
    finding: "Secreção pulmonar",
    morphology: "Diplococos lanceolados",
    gram: "Gram-positiva",
    color: "violet",
    note: "Cocos em pares, com cápsula. A cápsula dificulta a ação das defesas.",
  },
  {
    number: "03",
    name: "Escherichia coli",
    short: "E. coli",
    finding: "Trato intestinal",
    morphology: "Bastonetes / bacilos",
    gram: "Gram-negativa",
    color: "coral",
    note: "Formato de bastonete. A parede fina e a membrana externa deixam outra pista.",
  },
];

const quiz = [
  {
    question: "Carlos apresenta uma ferida com secreção purulenta. Qual achado morfológico sugere S. aureus?",
    options: ["Bastonetes isolados", "Cocos em cachos", "Diplococos lanceolados", "Espirilos longos"],
    answer: 1,
    explanation: "S. aureus é um coco Gram-positivo que costuma aparecer em agrupamentos semelhantes a cachos de uva.",
  },
  {
    question: "Na coloração de Gram, S. pneumoniae tende a permanecer roxo porque apresenta:",
    options: ["Membrana externa com LPS", "Peptideoglicano em camada espessa", "Ausência de parede celular", "Apenas uma cápsula lipídica"],
    answer: 1,
    explanation: "A parede Gram-positiva possui uma camada espessa de peptideoglicano, capaz de reter o complexo violeta após a descoloração.",
  },
  {
    question: "Qual situação do caso representa melhor a ideia de disbiose?",
    options: ["Aumento do oxigênio no pulmão", "Desequilíbrio da microbiota após antibiótico amplo", "Formação de uma cápsula bacteriana", "Coloração rosa de uma bactéria"],
    answer: 1,
    explanation: "Disbiose é um desequilíbrio da comunidade microbiana. O antibiótico pode reduzir microrganismos protetores e abrir espaço para oportunistas.",
  },
  {
    question: "A higiene brônquica contribui para a defesa porque:",
    options: ["Remove secreções e favorece a eliminação de microrganismos", "Transforma Gram-negativas em Gram-positivas", "Substitui a antibioticoterapia", "Impede qualquer contato com bactérias"],
    answer: 0,
    explanation: "A mobilização e a remoção de secreções apoiam a depuração das vias aéreas e a ação coordenada das defesas respiratórias.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [activeBacterium, setActiveBacterium] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuiz = quiz[quizIndex];
  const answered = selectedAnswer !== null;
  const progress = Math.round(((quizIndex + (answered ? 1 : 0)) / quiz.length) * 100);
  const performance = useMemo(() => Math.round((score / quiz.length) * 100), [score]);

  function answerQuestion(index: number) {
    if (answered) return;
    setSelectedAnswer(index);
    if (index === currentQuiz.answer) setScore((value) => value + 1);
  }

  function nextQuestion() {
    if (!answered) return;
    if (quizIndex === quiz.length - 1) {
      setFinished(true);
      return;
    }
    setQuizIndex((value) => value + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f2e9] text-[#173b43]">
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="A Batalha Invisível, início">
            <span className="brand-mark"><img src={ASSETS.logo} alt="" /></span>
            <span className="brand-copy">
              <span className="brand-name"><span>Batalha</span> <b>Invisível</b></span>
              <span className="brand-subtitle">Agressão & Defesa · caso interativo</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#caso">O caso</a>
            <a href="#evidencias">Evidências</a>
            <a href="#laboratorio">Laboratório</a>
            <a href="#quiz">Quiz clínico</a>
          </nav>
          <button className="header-action" onClick={() => scrollToId("quiz")}>
            <span>Começar análise</span><ArrowRight size={16} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image" style={{ backgroundImage: `url(${ASSETS.hero})` }} aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="shell hero-content">
            <div className="hero-copy">
              <div className="eyebrow light"><span className="eyebrow-dot" /> estudo de caso · turma 02</div>
              <h1>Antes de nomear a bactéria, <em>observe a forma.</em></h1>
              <p className="hero-lead">Uma investigação clínica sobre disbiose, infecção oportunista e as pistas deixadas pela coloração de Gram.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollToId("caso")}>Abrir o caso <ArrowDownRight size={18} /></button>
                <button className="button button-ghost-light" onClick={() => scrollToId("evidencias")}>Ver evidências <ChevronRight size={17} /></button>
              </div>
            </div>
            <div className="hero-note">
              <span className="note-label">Amostra 00 · contexto</span>
              <p>Um paciente. Três portas de entrada. Uma pergunta: onde a defesa falhou?</p>
              <div className="note-footer"><span>Enfermagem + Fisioterapia</span><span className="note-line" /></div>
            </div>
          </div>
          <div className="hero-bottom shell">
            <span>Arraste para investigar</span><span className="hero-rule" /><span>01 / 04</span>
          </div>
        </section>

        <div className="journey-thread shell" aria-label="Percurso da investigação">
          <span className="journey-label">fio clínico</span><span className="journey-node active">contexto</span><span className="journey-dots" /><span className="journey-node">evidência</span><span className="journey-dots" /><span className="journey-node">interpretação</span><span className="journey-dots" /><span className="journey-node">decisão</span>
        </div>

        <section className="case-section shell" id="caso">
          <aside className="side-rail" aria-label="Progresso do caso">
            <span className="rail-label">Percurso</span>
            <div className="rail-line"><span className="rail-progress" /></div>
            <span className="rail-step active">01</span><span className="rail-step">02</span><span className="rail-step">03</span><span className="rail-step">04</span>
          </aside>
          <div className="case-content">
            <div className="section-intro split-intro">
              <div>
                <div className="eyebrow"><span className="eyebrow-dot" /> ponto de partida</div>
                <h2>O caso começa<br /><em>no leito.</em></h2>
              </div>
              <div className="intro-copy"><p>Carlos, 45 anos, está internado após uma fratura grave de fêmur. Depois de dez dias de hospitalização e antibioticoterapia de amplo espectro, a equipe percebe que algo mudou.</p><p className="muted-copy">Leia como uma equipe interdisciplinar: cada sinal é uma pista, cada cuidado é parte da defesa.</p></div>
            </div>
            <div className="patient-panel">
              <div className="patient-stamp"><span>CASO</span><strong>CA–045</strong><small>enfermaria · D10</small></div>
              <div className="patient-details"><span className="micro-label">Situação clínica</span><h3>Três alterações, uma quebra de equilíbrio</h3><p>O antibiótico combateu uma infecção respiratória inicial, mas também reduziu parte da microbiota protetora. Agora, o intestino, a pele e o aparelho respiratório mostram novas respostas.</p></div>
              <div className="patient-vitals"><div><span>Febre</span><strong>38,6 °C</strong></div><div><span>Mobilidade</span><strong>restrita</strong></div><div><span>Sinal-chave</span><strong>secreção</strong></div></div>
            </div>
            <div className="symptom-grid">
              <article className="symptom-card"><div className="symptom-index">01</div><div><span className="micro-label">Intestino · agressão</span><h3>Diarreia e cólicas</h3><p>O desequilíbrio da microbiota reduz uma barreira ecológica e permite o crescimento desordenado de oportunistas.</p></div><Activity size={22} /></article>
              <article className="symptom-card"><div className="symptom-index">02</div><div><span className="micro-label">Pele · barreira</span><h3>Ferida no calcanhar</h3><p>Durante o reposicionamento, a equipe encontra secreção purulenta na região de apoio.</p></div><ShieldCheck size={22} /></article>
              <article className="symptom-card"><div className="symptom-index">03</div><div><span className="micro-label">Pulmão · defesa</span><h3>Secreção retida</h3><p>Tosse produtiva e dispneia pedem higiene brônquica e investigação microbiológica.</p></div><HeartPulse size={22} /></article>
            </div>
          </div>
        </section>

        <section className="evidence-section" id="evidencias">
          <div className="evidence-layout">
            <div className="evidence-image-wrap"><div className="image-caption"><span>ilustração de apoio</span><span>não substitui a lâmina</span></div><img src={ASSETS.evidence} alt="Ilustração esquemática das diferenças entre parede celular Gram-positiva e Gram-negativa" /></div>
            <div className="evidence-copy"><div className="eyebrow"><span className="eyebrow-dot" /> estação de evidências</div><h2>O laboratório não entrega respostas. <em>Entrega pistas.</em></h2><p>O biomédico recebe amostras de três sítios e realiza a coloração de Gram. Antes da cultura, o campo microscópico já sugere forma, arranjo e tipo de parede celular.</p><div className="evidence-list"><div><span className="evidence-no">01</span><span><strong>Ferida</strong><small>cocos em cachos · roxo</small></span></div><div><span className="evidence-no">02</span><span><strong>Secreção pulmonar</strong><small>diplococos · roxo</small></span></div><div><span className="evidence-no">03</span><span><strong>Trato intestinal</strong><small>bastonetes · rosa</small></span></div></div><button className="text-button" onClick={() => scrollToId("laboratorio")}>Interpretar morfologias <ArrowRight size={17} /></button></div>
          </div>
        </section>

        <section className="morphology-section shell" id="laboratorio">
          <div className="section-intro split-intro morphology-intro"><div><div className="eyebrow"><span className="eyebrow-dot" /> evidência 01–03</div><h2>Três formas.<br /><em>Três histórias.</em></h2></div><div className="intro-copy"><p>Selecione uma bactéria para aproximar a pista. Observe primeiro a morfologia; só depois conecte-a ao sítio clínico.</p><div className="small-legend"><span className="legend-dot violet-dot" /> Gram-positivas <span className="legend-dot coral-dot" /> Gram-negativas</div></div></div>
          <div className="morphology-layout">
            <div className="morphology-visual"><img src={ASSETS.morphology} alt="Ilustração comparativa de Staphylococcus aureus, Streptococcus pneumoniae e Escherichia coli" /><div className="visual-disclaimer">Representação esquemática para estudo · 2º termo</div></div>
            <div className="bacteria-notes">
              {bacteria.map((item, index) => <button key={item.name} className={`bacteria-row ${activeBacterium === index ? "selected" : ""}`} onClick={() => setActiveBacterium(index)}><span className={`bacteria-no ${item.color}`}>{item.number}</span><span className="bacteria-main"><strong>{item.short}</strong><small>{item.finding}</small></span><span className="bacteria-morph">{item.morphology}</span><ChevronRight size={17} /></button>)}
              <div className={`bacteria-detail ${bacteria[activeBacterium].color}`}><div className="detail-top"><span className="micro-label">pista selecionada</span><span className="detail-gram">{bacteria[activeBacterium].gram}</span></div><h3>{bacteria[activeBacterium].name}</h3><p>{bacteria[activeBacterium].note}</p><div className="detail-tags"><span>{bacteria[activeBacterium].morphology}</span><span>{bacteria[activeBacterium].finding}</span></div></div>
            </div>
          </div>
        </section>

        <section className="wall-section">
          <div className="shell wall-layout"><div className="wall-copy"><div className="eyebrow light"><span className="eyebrow-dot" /> estação de interpretação</div><h2>A cor é uma consequência da <em>armadura.</em></h2><p>A coloração de Gram transforma uma diferença estrutural em uma pista visual. A parede espessa retém o complexo violeta; a parede fina, acompanhada de uma membrana externa, exige o corante de contraste.</p><div className="wall-points"><div><span className="wall-swatch violet-swatch" /><span><strong>Gram-positiva</strong><small>peptideoglicano espesso · roxo</small></span></div><div><span className="wall-swatch coral-swatch" /><span><strong>Gram-negativa</strong><small>peptideoglicano fino + membrana externa · rosa</small></span></div></div></div><div className="wall-image"><img src={ASSETS.wall} alt="Comparação ilustrada entre parede Gram-positiva e Gram-negativa, com legendas em português" /><span className="image-corner-label">parede celular · corte esquemático</span></div></div>
        </section>

        <section className="profession-section shell">
          <div className="section-intro centered-intro"><div className="eyebrow"><span className="eyebrow-dot" /> cuidado em rede</div><h2>A defesa também é <em>interdisciplinar.</em></h2><p>O mesmo caso ganha perguntas diferentes quando observado pelo olhar da Enfermagem e da Fisioterapia.</p></div>
          <div className="profession-grid"><article className="profession-card nursing"><div className="profession-icon"><Stethoscope size={21} /></div><span className="micro-label">lente 01 · enfermagem</span><h3>Preservar a barreira</h3><p>Higienização das mãos, técnica asséptica, avaliação da ferida, reposicionamento e administração segura de medicamentos interrompem rotas de agressão.</p><button className="card-link" onClick={() => scrollToId("quiz")}>Levar para o raciocínio <ArrowRight size={16} /></button></article><article className="profession-card physiotherapy"><div className="profession-icon"><HeartPulse size={21} /></div><span className="micro-label">lente 02 · fisioterapia</span><h3>Dar passagem à defesa</h3><p>Mobilizar secreções, favorecer a ventilação e apoiar a tosse são formas de ajudar o sistema respiratório a remover o que ameaça o equilíbrio.</p><button className="card-link" onClick={() => scrollToId("quiz")}>Levar para o raciocínio <ArrowRight size={16} /></button></article></div>
        </section>

        <section className="quiz-section" id="quiz">
          <div className="shell quiz-shell">
            <div className="quiz-heading"><div><div className="eyebrow light"><span className="eyebrow-dot" /> estação final · raciocínio clínico</div><h2>Agora, formule<br /><em>sua hipótese.</em></h2></div><div className="quiz-meter"><span>progresso</span><strong>{finished ? 100 : progress}%</strong><div className="meter-track"><span style={{ width: `${finished ? 100 : progress}%` }} /></div></div></div>
            {!finished ? <div className="quiz-card"><div className="quiz-meta"><span>Questão {String(quizIndex + 1).padStart(2, "0")} / {String(quiz.length).padStart(2, "0")}</span><span><CircleHelp size={15} /> escolha uma alternativa</span></div><h3>{currentQuiz.question}</h3><div className="option-list">{currentQuiz.options.map((option, index) => { const isSelected = selectedAnswer === index; const isCorrect = index === currentQuiz.answer; const state = answered && isCorrect ? "correct" : answered && isSelected ? "wrong" : ""; return <button className={`quiz-option ${state}`} key={option} onClick={() => answerQuestion(index)}><span className="option-letter">{String.fromCharCode(65 + index)}</span><span>{option}</span>{answered && isCorrect && <Check size={18} />}</button>; })}</div>{answered && <div className={`quiz-feedback ${selectedAnswer === currentQuiz.answer ? "positive" : "neutral"}`}><div className="feedback-icon">{selectedAnswer === currentQuiz.answer ? <Check size={17} /> : <BookOpen size={17} />}</div><p><strong>{selectedAnswer === currentQuiz.answer ? "Boa leitura." : "Volte à pista."}</strong> {currentQuiz.explanation}</p></div>}<div className="quiz-footer"><span>{answered ? "Resposta registrada" : "Você pode revisar as evidências acima"}</span><button className="button button-light" onClick={nextQuestion} disabled={!answered}>{quizIndex === quiz.length - 1 ? "Ver resultado" : "Próxima questão"}<ArrowRight size={17} /></button></div></div> : <div className="quiz-result"><div className="result-badge"><Sparkles size={20} /></div><span className="micro-label">investigação concluída</span><h3>{performance >= 75 ? "Você leu bem as pistas." : "A hipótese está em construção."}</h3><p>Você acertou <strong>{score} de {quiz.length}</strong> questões. O importante é voltar à evidência, observar a forma e conectar a estrutura ao cuidado.</p><div className="result-actions"><button className="button button-light" onClick={restartQuiz}><RotateCcw size={17} /> Refazer quiz</button><button className="text-button light-text-button" onClick={() => scrollToId("caso")}>Revisitar o caso <ArrowRight size={17} /></button></div></div>}
          </div>
        </section>

        <section className="closing-section shell"><div className="closing-stamp"><Microscope size={24} /><span>fim da primeira leitura</span></div><h2>Uma lâmina pode parecer silenciosa.<br /><em>O cuidado, não.</em></h2><p>Use este caso como ponto de partida para a aula prática de coloração de Gram. Na próxima etapa, a evidência será observada por você.</p><div className="closing-meta"><span>AGRESSÃO & DEFESA</span><span className="closing-line" /><span>ENFERMAGEM + FISIOTERAPIA</span></div></section>
      </main>

      <footer className="site-footer"><div className="shell footer-inner"><div className="footer-brand"><img src={ASSETS.logo} alt="" /><span><b>Batalha</b> Invisível</span></div><p>Material didático interativo · representação esquemática para estudo.</p><span className="footer-year">A&D / 02</span></div></footer>
    </div>
  );
}
