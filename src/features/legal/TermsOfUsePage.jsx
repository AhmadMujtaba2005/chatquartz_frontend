import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const TermsOfUsePage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF] pb-12 sm:pb-20 pt-[64px] sm:pt-[88px] md:pt-[112px] overflow-x-hidden">
                    <div className="relative z-10">
                        <h1 className="text-[48px] font-bold leading-tight mb-6 mt-10 sm:mt-16 md:mt-24 lg:mt-45 text-center tracking-tight">Terms Of Use</h1>
                    </div>
                </div>

                {/* Section 2: Terms of Use Content */}
                <div className="max-w-[800px] mx-auto w-[90%] mt-16 sm:mt-24 mb-20 text-gray-700 leading-relaxed text-[15px]">
                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">1. Terms of Service</h2>
                        <p className="mb-4">These Terms of Service are a contract between you and Support Board (referred to in these Terms of Service as “website”, “Support Board”, “us”, “we” or “our”), the provider of the Support Board website and the services accessible from the Support Board websites and domains (which are collectively referred to in these Terms of Service as “Support Board”). The Support Board websites and domains are cloud.board.support, board.support, all subdomain of board.support, and all other websites and domains owned or operated by Support Board.</p>
                        <p>You are agreeing to be bound by these Terms of Service. If you do not agree to these Terms of Service, please do not use the Support Board Service. In these Terms of Service, “you” refers both to you as an individual and to the entity you represent. If you violate any of these Terms of Service, we reserve the right to cancel your account or block access to your account without notice.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">2. Your account</h2>
                        <div className="pl-4 border-l-2 border-[#AAC8FD] flex flex-col gap-3 mt-4">
                            <p><span className="font-bold">2.1.</span> Your account must be registered by a human. Accounts registered by “bots” or other automated methods are not permitted. Additionally, you must be 16 years of age or older.</p>
                            <p><span className="font-bold">2.2.</span> You must provide a valid permanent email address, along with any other information required by Support Board during the registration process. One person or legal entity may not maintain more than one free account.</p>
                            <p><span className="font-bold">2.3.</span> You are responsible for maintaining the security of your account and password. We will not be liable for any loss or damage from your failure to comply with this security obligation. Personally identifiable information submitted by you will be subject to our Privacy Policy.</p>
                            <p><span className="font-bold">2.4.</span> You may not use the Support Board Service for any illegal or unauthorized purpose. You must not, in the use of the Support Board Service, violate any laws in your jurisdiction, including, among other things, by: distributing any virus, time bomb, trap door, or other harmful or disruptive computer code, mechanism or program; covering or obscuring any notice, legend, warning or banner contained on the Support Board Service; interfering with or circumventing any security feature of the Support Board Service or any feature that restricts or enforces limitations on use of or access to the Support Board Service; infringing or violating the rights of any other party, including without limitation any intellectual property rights, including copyright laws, or rights of privacy or publicity being obscene, offensive, pornographic, fraudulent, deceptive, defamatory, threatening, harassing, abusive, slanderous, hateful, or causing embarrassment to any other person as determined by Support Board in its sole discretion; or deliberately misleading anyone as to your identity, impersonating another, or falsely identifying the source of any information.</p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">3. Apps updates and support</h2>
                        <p>The Support Board Apps purchased from <a href="https://codecanyon.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">CodeCanyon</a> are subject to the Envato Terms: 6 months of support and lifetime updates. The Support Board Apps purchased outside of CodeCanyon include 1 year of free updates and 6 months of support.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">4. Payment and Refunds</h2>
                        <p className="mb-4">A valid credit or debit card or PayPal account is required for buying Support Board and the Support Board Apps. The Support Board Software and the Support Board Apps are billed in advance in accordance with our pricing schedule. In order to treat everyone equally, no exceptions will be made. All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you will be responsible for payment of all such taxes, levies, or duties, excluding only United States (federal or state) income taxes. You agree to pay for any taxes that might be applicable to your use of the Support Board Service or payments made by you in connection with your use of the Support Board Service. You will be eligible for a full refund only if all of the following conditions are verified:</p>
                        <div className="pl-4 border-l-2 border-[#AAC8FD] flex flex-col gap-3 mt-4 mb-4">
                            <p><span className="font-bold">4.1.</span> The Support Board software and/or the Support Board Apps have issues and/or do not work properly in your hosting/server/website.</p>
                            <p><span className="font-bold">4.2.</span> The Support Board’s Support has verified the issue and has not been able to solve it within 72h from the time you provided the accesses and/or links to your hosting/server/website.</p>
                            <p><span className="font-bold">4.3.</span> The problems/issues are related to the Support Board software and/or the Support Board Apps. You will not be eligible for a refund if the issue is related to your hosting/server.</p>
                        </div>
                        <p>To verify and solve the issue our support team could ask you the accesses (user, password, IP) of your website/hosting/server. You will not be eligible for a refund if you refuse to provide us these details. We apply the refund policy of <a href="https://codecanyon.net/page/customer_refund_policy" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">Envato</a> for Support Board and the Support Board apps, for more details click here.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">5. Violation of these Terms of Service</h2>
                        <p>We reserve the right to investigate and prosecute violations of any of these Terms of Service to the fullest extent of the law. We may involve and cooperate with law enforcement authorities in prosecuting Users who violate the Terms of Service. You hereby agree that Support Board may, in the exercise of our sole discretion, remove or delete any data, accounts or other content that violates these Terms of Service or that is otherwise objectionable. Support Board, in its sole discretion, has the right to suspend or terminate your account if you breach these Terms of Service. Any termination of your account will result in the deactivation or deletion of your account, denied access to your account, and the removal of all content in your account.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">6. Slack App</h2>
                        <p className="mb-4"><a href="https://board.support/slack" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">The Slack app</a> has no recurring costs but we reserve the right to terminate the service at any time if we deem it necessary. The main reason for stopping the service is the sending / receiving of too many messages. While we offer the Slack integration for free, our servers must process every message sent to make the integration works, and this have costs (we pay for it). In the case we decide to stop the service:</p>
                        <div className="pl-4 border-l-2 border-[#AAC8FD] flex flex-col gap-3 mt-4">
                            <p><span className="font-bold">6.1.</span> We will contact you prior to stop the service to notify you and discuss any solutions to the problem.</p>
                            <p><span className="font-bold">6.2.</span> We will provide you a technical guide to continue using the Slack app without using our servers or we will give you a full refund of the Slack app.</p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">7. Messenger App</h2>
                        <p className="mb-4"><a href="https://board.support/messenger" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">The Messenger app</a> has no recurring costs but we reserve the right to terminate the service at any time if we deem it necessary. The main reason for stopping the service is the sending / receiving of too many messages. While we offer the Messenger integration for free, our servers must process every message sent to make the integration works, and this have costs (we pay for it). In the case we decide to stop the service:</p>
                        <div className="pl-4 border-l-2 border-[#AAC8FD] flex flex-col gap-3 mt-4">
                            <p><span className="font-bold">7.1.</span> We will contact you prior to stop the service to notify you and discuss any solutions to the problem.</p>
                            <p><span className="font-bold">7.2.</span> We will provide you a technical guide to continue using the Messenger app without using our servers or we will give you a full refund of the Messenger app.</p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">8. Intellectual Property and Content Ownership</h2>
                        <p className="mb-3">The contents of the Support Board software are copyrighted. Support Board, and the Support Board logos, are trademarks of Support Board and may not be used without our express written permission.</p>
                        <p className="mb-3">You can not duplicate, copy, sell, share, distribute or reuse any portion of the HTML/CSS/PHP/JS or visual design elements of the Support Board software, Support Board Apps (Slack, Dialogflow, Woocommerce, and all other apps and addons of Support Board) and <a href="https://board.support/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">this website</a> without express written permission. You do not acquire any ownership rights by using the Support Board Service and the Support Board software.</p>
                        <p className="mb-3">You can use our logos and graphics of <a href="https://board.support/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">this website</a>, including the ones available on Envato only to promote(as affiliate or with any other marketing activity) the Support Board software and the Support Board Apps.</p>
                        <p className="mb-3">You’re allowed to install and use the Support Board software only on 1 website/domain per license.</p>
                        <p className="mb-3">The Envato Regular License and the Envato Extended License purchase gives you the legal rights to install and use the Support Board software only on 1 website/domain.</p>
                        <p className="mb-3">The Envato Extended License purchase does give you the rights to re-sell or distribute Support Board, including parts of it, and including as a SAAS.</p>
                        <p className="mb-3">The Envato Extended License purchase (also called SaaS version, details at <a href="https://board.support/saas" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">board.support/saas</a>) and the Reseller License Purchase (also called reseller version, details at <a href="https://board.support/resellers" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">board.support/resellers</a>) does NOT give you the rights to re-sell or distribute Support Board, including parts of it, and including as a SAAS, on the <a href="https://www.envato.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">Envato marketplace</a> (including <a href="https://codecanyon.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">CodeCanyon</a>) and the <a href="https://appsumo.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">AppSumo marketplace</a>.</p>
                        <p className="mb-3">The Envato Extended License purchase (also called SaaS version, details at <a href="https://board.support/saas" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">board.support/saas</a>) and the Reseller License Purchase (also called reseller version, details at <a href="https://board.support/resellers" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">board.support/resellers</a>) does NOT give you the rights to re-sell or distribute Support Board, including parts of it, as a downloadable product or as software or script that can be installed on the customer’s server. You are NOT allowed to allow your customers to download the Support Board software or any part of it.</p>
                        <p>You are not allowed to re-sell or distribute Support Board, including parts of it, and including as a SAAS, on the <a href="https://www.envato.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">Envato marketplace</a> (including <a href="https://codecanyon.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">CodeCanyon</a>) and the <a href="https://appsumo.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">AppSumo marketplace</a> in any circumstance.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">9. Termination by User</h2>
                        <p className="mb-3">You have the right to terminate your subscription to Support Board under different conditions depending on whether your subscription was made on a monthly or annual basis.</p>
                        <p className="mb-3">Monthly subscription: if the fees for the use of Support Board are paid on a monthly basis, the termination will become effective from the first day following the monthly period during which the termination was notified. For example, in the case of a subscription taken out on April 10 and termination notified on May 15, the termination will become effective on June 10.</p>
                        <p className="mb-3">Annual subscription: if the fees for the use of Support Board are paid on an annual basis, the termination will become effective from the first day following the relevant annual period.<br />For example, in the case of a subscription taken out on January 1, 2021 and termination notified on August 15, 2021, termination will become effective on January 1, 2022.</p>
                        <p className="mb-3">Access to Support Board and the License remains in effect until the effective date of termination. As the adherence to the Terms is made for a fixed period, on a monthly or annual basis, no refund of the fees for the use of Support Board, whether paid on an annual or monthly basis, shall be granted.</p>
                        <p className="mb-3">You are not entitled to invoke your own breach of the Terms, and in particular the inaccuracy of one or more of your statements, to request early termination of the Support Board services.</p>
                        <p className="mb-3">You can terminate a subscription by clicking the button “Cancel subscription” in the “Membership” section of the <a href="https://cloud.board.support/account?tab=membership" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">Support Board account page</a>.</p>
                        <p>You can terminate the autorecharge of credits by unchecking the “Auto recharge” checkbox in the “Membership” section of the <a href="https://cloud.board.support/account?tab=membership" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">Support Board account page</a>.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">10. Limited Liability</h2>
                        <p className="mb-3">You acknowledge and expressly agree that you assume full responsibility for your use of Support Board.</p>
                        <p className="mb-3">While the security of Support Board is our priority (see <a href="https://board.support/docs/#security" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">security documentation</a>), you acknowledge and expressly agree that any information you send or receive during your use of Support Board may not be secure and may be intercepted or acquired by unauthorized parties.</p>
                        <p className="mb-3">You acknowledge and expressly agree that your use of the Support Board is at your sole risk, and that the Support Board may prove to be defective or vulnerable, thus exposing your information systems to the risk of intrusion or corruption.</p>
                        <p className="mb-3">You agree to ensure the security of the systems, programs and data, and you acknowledge that you are solely responsible for the configuration of your computer hardware, programs and platforms used to access Support Board.</p>
                        <p className="mb-4">You acknowledge that you are solely responsible for the use of Support Board, including any statements or information communicated via the Support Board Software in breach of applicable laws or regulations. In particular, you agree not to:</p>
                        <ul className="list-none space-y-3 mb-6 pl-4 border-l-2 border-[#AAC8FD]">
                            <li><span className="font-bold">10.1.</span> Use Support Board for any purpose other than for your own business</li>
                            <li><span className="font-bold">10.2.</span> Use or attempt to use the Support Board Software in an offensive, abusive or unlawful manner or purpose, in particular by publishing or using terms that may be offensive or inappropriate;</li>
                            <li><span className="font-bold">10.3.</span> Transmit or attempt to transmit copyrighted material without the prior express consent of the copyright owner;</li>
                            <li><span className="font-bold">10.4.</span> Use or attempt to use any automated program (including, but not limited to, a robot, spider or other automated means or interface to access the Support Board Software;</li>
                            <li><span className="font-bold">10.5.</span> Interfere or attempt to interfere with the proper functioning of the Support Board Software in a manner that could damage, disable, overload or alter the Support Board Software, in particular, hack or attempt to circumvent any content filtering techniques that Support Board reserves the right to use;</li>
                            <li><span className="font-bold">10.6.</span> Without prior purchase of the Envato Extended License of Support Board, copy, modify, merge, sell, redistribute, assign, transfer Support Board or the source code of the Support Board Software or any part thereof, as well as reverse engineer, decompile, disassemble, translate, decrypt or otherwise attempt to discover the source code used for the Support Board Software;</li>
                            <li><span className="font-bold">10.7.</span> Infringe or attempt to infringe any patent, trademark, trade secret, copyright held by Support Board;</li>
                            <li><span className="font-bold">10.8.</span> Introduce or attempt to introduce viruses, Trojan horses or other malicious or technologically harmful hardware.</li>
                        </ul>
                        <p>Finally, you understand and agree that neither Support Board nor its suppliers or licensors shall be liable to you for any direct, indirect damages of any kind, including but not limited to, damages for loss of property, profits, goodwill, use, data or other tangible or any other damages based on contract, tort, or otherwise (even if Support Board has been advised of the possibility of such damages), resulting from: the use or the inability to use the Support Board Software; unauthorized access to or alteration of your transmissions or data; statements or conduct of any third party on Support Board; any actions we take or fail to take as a result of communications you send to us; human errors; technical malfunctions; failures; omissions, interruptions, latency, deletions or defects of any device or network, providers, or software (including, but not limited to, those that do not permit participation in Support Board); any injury or damage to computer equipment; inability to fully access Support Board. theft, tampering, destruction, or unauthorized access to, images or other content of any kind; data that is processed late or incorrectly or is incomplete or lost; typographical, printing or other errors, or any combination thereof; or any other matter relating to Support Board. If despite the above Support Board is found liable by a court for any reason whatsoever, you expressly agree that its aggregate liability will be strictly limited to the fees for the access of Support Board charged to you during the last twelve (12) months prior to the date of the document instituting the proceedings.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">11. Fees and Payment Terms</h2>
                        <p className="mb-4">Unless explicitly specified otherwise in the price quotation or by Support Board in writing, all price quotations are non-binding and may be adjusted at any time, particularly if other or additional information is provided. Payment obligations are non-cancelable and the Support Board Fees, taxes, purchases, once paid, are non-refundable to the greatest extent permitted by applicable law. You will pay the Fees due under these terms in accordance with the following applicable payment method:</p>
                        <ul className="list-none space-y-3 mb-6 pl-4 border-l-2 border-[#AAC8FD]">
                            <li><span className="font-bold">11.1.</span> If we agree that you may remit Fees using a credit card, you represent and warrant that you are authorized to use that credit card, that any and all Fees may be billed to that credit card, and that payment of such Fees will not be declined, and you expressly authorize us and/or our third-party payment processor to charge the applicable Fees on said credit card;</li>
                            <li><span className="font-bold">11.2.</span> If we agree that you may remit fees using a direct debit, standing order or other form of automatic bank or payment mandate (automatic debit mandate), you represent and warrant that you are authorized to apply that automatic debit mandate, that any and all Fees may be discharged using that automatic debit mandate, that payment of such Fees will not be declined, and you expressly authorize us and/or our third-party payment processor to implement the automatic debit mandate; We reserve the right to require you to set up an automatic debit mandate in order to use our Services.</li>
                        </ul>
                        <p>By purchasing (also called subscribing) a Support Board subscription (also called “Membership”) (<a href="https://cloud.board.support/account/?tab=membership" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">cloud.board.support</a>) you agree to pay Support Board the monthly or annual subscription fees indicated for that service. By enabling the “Auto recharge” option of the Support Board credits (<a href="https://board.support/docs/#cloud-credits" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">documentation</a>) you agree to pay Support Board the fees indicated for that service. By purchasing (also called subscribing) a Support Board subscription and by enabling the “Auto recharge” option of the Support Board credits By giving us your consent, you authorize us to autonomously and automatically charge you, and agree to be charged automatically. By purchasing the Reseller version of Support Board (<a href="https://board.support/resellers" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">board.support/resellers</a>) you agree to pay within 10 days of receiving our invoice the 10% fee on your earnings as explained at <a href="https://board.support/resellers" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2B64FD] hover:underline">board.support/resellers</a> and in the docs-resellers.pdf file we will send you. You acknowledge that failing to pay within 10 days of receiving our invoice the 10% fee on your earnings will result in the termination of your Reseller version of Support Board.</p>
                    </section>

                    <section>
                        <h2 className="text-[22px] font-bold text-gray-900 mb-4">12. Who do I contact if I have any questions?</h2>
                        <p className="mb-4">If you have any questions or comments about this Privacy Policy or feel that we are not abiding by the terms of this Privacy Policy, please contact us by post or email:</p>
                        <p><span className="font-bold">By email:</span><br />
                            <a href="mailto:support@board.support" className="text-[#2B64FD] hover:underline font-medium">support@board.support</a></p>
                    </section>
                </div>

                {/* Section 3: Footer */}
                <RevealOnScroll>
                    <div className="w-full bg-gradient-to-t from-[#AAC8FD] to-[#FFFFFF] mt-24">
                        <div className="max-w-[1440px] mx-auto">
                            <Footer />
                        </div>
                    </div>
                </RevealOnScroll>
            </SmoothScroll>
        </div>
    );
};

export default TermsOfUsePage;
