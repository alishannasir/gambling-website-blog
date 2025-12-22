"use client";
import React from 'react';

export default function Terms() {
   return (
      <main className="min-h-screen bg-background text-secondary pb-20 overflow-x-hidden pt-24">
         <div className="container mx-auto px-4 max-w-4xl">

            {/* Header Section */}
            <div className="text-center mb-16 relative">
               <h1 className="text-4xl md:text-7xl font-bold font-primary uppercase tracking-tight relative z-10 mb-4">
                  Terms & Conditions
               </h1>
               <div className="h-2 w-32 bg-secondary mx-auto mb-6"></div>
               <p className="text-xl font-secondary text-secondary/70">
                  Please read these terms carefully before using our service.
               </p>

               {/* Horizontal Scribble Decoration */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 border-2 border-secondary/5 rounded-full rotate-[-2deg] -z-0"></div>
            </div>

            {/* Content Container */}
            <div className="bg-white border-2 border-secondary rounded-xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">

               {/* Decorative Corner */}
               <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 border-l-2 border-b-2 border-secondary/20 rounded-bl-xl"></div>

               <div className="prose prose-lg prose-gray max-w-none font-secondary">

                  <section className="mb-10">
                     <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase mb-4 border-b-2 border-secondary/10 pb-2">1. Introduction</h2>
                     <p>
                        Welcome to GambleGuide. By accessing this website we assume you accept these terms and conditions.
                        Do not continue to use GambleGuide if you do not agree to take all of the terms and conditions stated on this page.
                     </p>
                  </section>

                  <section className="mb-10">
                     <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase mb-4 border-b-2 border-secondary/10 pb-2">2. Intellectual Property Rights</h2>
                     <p>
                        Other than the content you own, under these Terms, GambleGuide and/or its licensors own all the intellectual property rights and materials contained in this Website.
                        You are granted limited license only for purposes of viewing the material contained on this Website.
                     </p>
                  </section>

                  <section className="mb-10">
                     <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase mb-4 border-b-2 border-secondary/10 pb-2">3. Restrictions</h2>
                     <p className="mb-4">You are specifically restricted from all of the following:</p>
                     <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
                        <li>publishing any Website material in any other media;</li>
                        <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                        <li>publicly performing and/or showing any Website material;</li>
                        <li>using this Website in any way that is or may be damaging to this Website;</li>
                        <li>using this Website in any way that impacts user access to this Website;</li>
                     </ul>
                  </section>

                  <section className="mb-10">
                     <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase mb-4 border-b-2 border-secondary/10 pb-2">4. Your Content</h2>
                     <p>
                        In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website.
                        By displaying Your Content, you grant GambleGuide a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                     </p>
                  </section>

                  <section className="mb-10">
                     <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase mb-4 border-b-2 border-secondary/10 pb-2">5. No Warranties</h2>
                     <p>
                        This Website is provided "as is," with all faults, and GambleGuide express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
                        Also, nothing contained on this Website shall be interpreted as advising you.
                     </p>
                  </section>

                  <section className="mb-10">
                     <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase mb-4 border-b-2 border-secondary/10 pb-2">6. Limitation of Liability</h2>
                     <p>
                        In no event shall GambleGuide, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.
                        GambleGuide, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                     </p>
                  </section>

                  <section className="mb-4">
                     <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase mb-4 border-b-2 border-secondary/10 pb-2">7. Governing Law & Jurisdiction</h2>
                     <p>
                        These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.
                     </p>
                  </section>

               </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-12 text-secondary/50 font-mono text-sm">
               Last updated: December 2025
            </div>

         </div>
      </main>
   );
}