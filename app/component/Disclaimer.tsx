export default function Disclaimer() {
  return (
    <section className="w-full bg-gray-50 px-6 py-16 border-t-2 border-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Main Disclaimer Box */}
        <div className="bg-background border-2 border-secondary p-8 md:p-12 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Header */}
          <div className="flex items-center gap-6 mb-8 border-b-2 border-secondary/10 pb-6">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 border-2 border-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <span className="text-4xl">⚠️</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-primary font-bold text-secondary uppercase tracking-tight">
              Important Disclaimer
            </h2>
          </div>

          {/* Disclaimer Content */}
          <div className="space-y-6 font-secondary text-primary leading-relaxed">
            {/* Age Restriction */}
            <div className="p-6 bg-secondary text-background rounded-lg border-2 border-secondary transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
              <p className="text-lg md:text-xl font-bold uppercase tracking-wide">
                <strong className="text-3xl mr-2">18+</strong> This website is intended for adults aged 18 years or older.
                Gambling is not permitted for persons under the age of 18.
              </p>
            </div>

            {/* Main Disclaimers */}
            <div className="space-y-6 text-base md:text-lg text-secondary/90">
              <p>
                <strong className="text-secondary font-bold uppercase block mb-1">Gambling Addiction Warning:</strong> Gambling can be addictive.
                Please play responsibly and only gamble what you can afford to lose. If you or someone you know
                has a gambling problem, help is available.
              </p>

              <p>
                <strong className="text-secondary font-bold uppercase block mb-1">Information Accuracy:</strong> While we strive to provide
                accurate and up-to-date information, we make no representations or warranties regarding the
                completeness, accuracy, or reliability of any content on this website. All gambling platforms
                featured are subject to their own terms and conditions.
              </p>

              <p>
                <strong className="text-secondary font-bold uppercase block mb-1">Affiliate Disclosure:</strong> This website may contain
                affiliate links to gambling platforms. We may receive compensation when you sign up or make
                deposits through our links, at no additional cost to you. This helps us maintain and improve
                our content.
              </p>

              <p>
                <strong className="text-secondary font-bold uppercase block mb-1">Legal Compliance:</strong> Online gambling laws vary by
                jurisdiction. It is your responsibility to ensure that gambling is legal in your location
                before participating. We do not encourage illegal gambling activities.
              </p>

              <p>
                <strong className="text-secondary font-bold uppercase block mb-1">No Guarantee:</strong> Gambling outcomes are based on
                chance. We do not guarantee wins or specific results. Past performance does not indicate
                future results. Always gamble responsibly.
              </p>
            </div>

            {/* Help Resources */}
            <div className="pt-8 border-t-2 border-secondary/10">
              <p className="font-bold text-secondary uppercase tracking-wider mb-4 text-xl">
                Responsible Gambling Resources:
              </p>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <strong>GamCare:</strong> <span className="underline decoration-2 underline-offset-2">www.gamcare.org.uk</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <strong>Gamblers Anonymous:</strong> <span className="underline decoration-2 underline-offset-2">www.gamblersanonymous.org</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <strong>National Council on Problem Gambling:</strong> <span className="underline decoration-2 underline-offset-2">www.ncpgambling.org</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <strong>BeGambleAware:</strong> <span className="underline decoration-2 underline-offset-2">www.begambleaware.org</span>
                </li>
              </ul>
            </div>

            {/* Final Note */}
            <div className="pt-6 text-center">
              <p className="text-sm text-secondary/60 font-medium uppercase tracking-widest">
                Last updated: December 2025 | For informational purposes only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

