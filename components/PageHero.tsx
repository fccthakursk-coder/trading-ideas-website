type Props = {
  title: string;
  subtitle: string;
};

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}