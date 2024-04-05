import "./ChatHeader.css";

export default function() {
  return (
    <>
      <div className="chat-header">
        <div className="header-sub-div">
          <h1 className="header-text">KAZ-T5 Model</h1>
          <br />
          <p className="header-sub-text">
            Бұл модель google/mt5-large моделіне негізделген. Модель 30 000 үлгіні пайдалана отырып, Стэнфордтың Сұрақтарға Жауап Беру Деректер Жинағының (SQuAD) қазақ тіліндегі нұсқасында дәл бапталған.
          </p>
        </div>
        <br />
      </div>
    </>
  );
}