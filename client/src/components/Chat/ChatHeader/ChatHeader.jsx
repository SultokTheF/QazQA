import "./ChatHeader.css";

export default function() {
  return (
    <>
      <div className="chat-header">
        <div className="headerSubDiv">
          <h1 className="headerText">KAZ-T5 Model</h1>
          <br />
          <p className="headerSubText">
            Бұл модель google/mt5-large моделіне негізделген. Модель 30 000 үлгіні пайдалана отырып, Стэнфордтың Сұрақтарға Жауап Беру Деректер Жинағының (SQuAD) қазақ тіліндегі нұсқасында дәл бапталған.
          </p>
        </div>
        <br />
      </div>
    </>
  );
}