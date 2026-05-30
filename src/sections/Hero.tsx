import { HeroMotif } from '../components/Mark';

export function Hero() {
  return (
    <section className="hero">
      <HeroMotif />
      <div className="wrap hero-inner">
        <div className="kicker reveal in">Production-Ready Partner</div>
        <h1 className="reveal in d1">
          Vibe Codeを、<br />
          <span className="accent">Production-Ready</span>
          <span className="thin">水準へ。</span>
        </h1>
        <p className="sub reveal in d2">
          AIで形にしたプロダクトの完成度を、エンジニアの視点で本番品質まで磨き上げる。作るべきかを見極め、診て、治して、見守る。AI時代の、対等な技術パートナー。
        </p>
        <div className="hero-cta reveal in d3">
          <a href="#contact" className="btn btn-accent">無料で相談する</a>
          <a href="#services" className="btn btn-ghost">サービスを見る</a>
        </div>
      </div>
    </section>
  );
}
