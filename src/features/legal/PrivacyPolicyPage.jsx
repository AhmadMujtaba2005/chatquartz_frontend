import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import ScrollDownIndicator from "@/components/ui/ScrollDownIndicator";

const PrivacyPolicyPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] min-h-screen flex flex-col justify-center items-center pt-[64px] sm:pt-[88px] md:pt-[112px] pb-[64px] sm:pb-[88px] md:pb-[112px] overflow-x-hidden">
                    <div className="relative z-10 w-full flex flex-col items-center justify-center">
                        <h1 className="text-[32px] sm:text-[40px] font-bold leading-tight text-white mb-6 text-center tracking-tight">
                            Privacy Policy
                        </h1>
                        <div className="max-w-4xl px-6 mx-auto text-center space-y-5 text-[14px] text-purple-200 leading-relaxed font-medium">
                            <p>
                                This Privacy Policy explains what information we collect about you and why, what we do with that information, how we share it, and how we handle the personal information created, inputted, submitted, posted, transmitted, stored or displayed by you, your Agents and End-Users when accessing and using our Services.
                            </p>
                            <p>
                                {"For the purposes of this Policy, our “Services” refer to the main plugin “Support Board” and to any other “App” like Slack App or Artificial Intelligence app, “our Website” refers to "}
                                <a href="https://board.support/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">https://board.support/</a>
                                {" and sub-domains, and “we”, “us”, “our” refer to our company SCHIOCCO LTD."}
                            </p>
                            <p>
                                We encourage you to periodically review this page for the latest information on our privacy practices. Your continued use of our Services or Websites constitutes your agreement to be bound by such changes to this Policy. Your only remedy, if you do not accept the terms of this Policy, is to discontinue use of our Service and our Website.
                            </p>
                            <p>
                                This Policy explains the what, how and why of the personal information that we collect when you visit our Websites or when you use our Services. The personal information collected and used by Support Board, and its subsidiaries and affiliates, is limited to the purpose for which our subscribers engage any member of Support Board and other purposes expressly described in this Policy.
                            </p>
                        </div>
                    </div>
                    {/* Scroll Down Indicator */}
                    <ScrollDownIndicator />
                </div>

                {/* Section 2: Policy Content */}
                <div className="w-[92%] max-w-[960px] mx-auto my-8 mb-24 space-y-8 text-gray-700">

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>What this policy covers:</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                The website that link to this Policy, including: <a href="https://board.support/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">https://board.support/</a>. The Services to which you have subscribed or registered or purchased.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>What do we mean by personal information?</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                In this Policy, personal information means information relating to an identified or identifiable natural person, business or legal entity. An identifiable person is one who can be identified, directly or indirectly, in particular by reference to an identification number or to one or more factors specific to his physical, physiological, mental, economic, cultural or social identity. Except as described in this Policy, Support Board currently doesn&apos;t sell, rent or loan any personal information to any third party, but Support Board keep the right to change this policy in future and sell or rent any personal information to any third party at any time.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Personal information that you provide to us or that we collect</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                By buying the Support Board plugin you provide to <a href="https://envato.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">Envato</a> personal information, more details <a href="https://www.envato.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">here</a>. We do not currently process or share any of your personal data.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Conversations - PHP and WP versions</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                We do not have access and we do not collect any information of any of your Support Board conversations, messages and attachments. The information is stored to your own server only and is not transmitted to Support Board.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Conversations - Cloud version</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                The information is stored on our secure databases. We do not process or share any of your conversations.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Users - PHP and WP versions</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                We do not have access and we do not collect any information of any Support Board user. The information is stored to your own server only and is not transmitted to Support Board.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Users - Cloud version</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                The information is stored on our secure databases. We do not process or share any of your conversations.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Other information - PHP and WP versions</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                We do not have access and we do not collect any information that is pass through Support Board or is generated by Support Board.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Other information - Cloud version</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                The information is stored on our secure databases. We do not process or share any of your conversations.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Slack</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                When you synchronize Support Board with <a href="https://slack.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">Slack</a> we collect the following personal information: team_id, channel_id, access_token, your website url, Envato purchase code, Slack email, Slack name, Slack profile picture of your Slack team members. These data are sent to us only one time, when you sync Slack. By voluntarily providing us with Account Information, you hereby represent that you are the owner of such personal information or are otherwise authorized to provide it to us. All Service Data is subject to our technical safeguards as more fully subscribed in our Terms of Service. By using Slack with Support Board, your Slack messages, attachments and any other content sent from Slack, are sent to our server and routed back to your website. No data are stored in our server. If you don&apos;t want to share any data with us, please contact us <a href="https://board.support/docs/support" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">here</a> and we will send you a tutorial to configure Support Board in order to use your own Slack integration. By using Slack you provide to Slack personal information, more details <a href="https://slack.com/intl/en-cl/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">here</a>. By buying the License for our Slack App you provide to us your email, name and to <a href="https://gumroad.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">Gumroad</a> personal information, more details <a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">here</a>.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Dialogflow and Google</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                When you synchronize Support Board with <a href="https://dialogflow.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline"> Dialogflow</a> to use the Diaogflow Bot, or Google services like language translation, we collect the following personal information: refresh token, Envato purchase code, email, picture, locale, profile picture. By voluntarily providing us with Account Information, you hereby represent that you are the owner of such personal information or are otherwise authorized to provide it to us. All Service Data is subject to our technical safeguards as more fully subscribed in our Terms of Service. By using Dialogflow with Support Board only the Refresh Token(an alphanumeric string) is sent to our server. No other data are sent or stored in our server. If you don&apos;t want to share or send any data with us, please contact us <a href="https://board.support/docs/support" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">here</a> and we will send you a tutorial to configure Support Board in order to use your own Dialogflow integration. By using Dialogflow you provide to Dialogflow personal information, more details <a href="https://dialogflow.com/terms" className="text-brand-primary font-semibold hover:underline">here</a>. By buying the License for our Artificial Intelligence app you provide to us your email, name and to <a href="https://gumroad.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">Gumroad</a> personal information, more details <a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">here</a>.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Messenger</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                When you synchronize Support Board with Facebook <a href="https://www.messenger.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">Messenger</a> we collect the following personal information: page token, page ID, Envato purchase code. By voluntarily providing us with Account Information, you hereby represent that you are the owner of such personal information or are otherwise authorized to provide it to us. All Service Data is subject to our technical safeguards as more fully subscribed in our Terms of Service. By using Facebook Messenger with Support Board, your Facebook Messenger messages, attachments and any other message type sent from Messenger, are sent to our server and routed back to your website. No data are stored in our server. If you don&apos;t want to share any data with us, please contact us here and we will send you a tutorial to configure Support Board in order to use your own Facebook Messenger integration. By using Facebook Messenger you provide to Facebook personal information, more details here.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Other apps and integrations</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                When you synchronize Support Board with other external services, you share information with the external service according to the external service&apos;s terms of service.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Data retention policy</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                The types of information covered in the policy are textual information like your email. We don&apos;t keep other type of data related to you.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Data archival/removal policy</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                We don&apos;t have a time limit for keeping your information but if you can contact us here and request the permanent deleting of your information from our system and database. We will delete your information within 7 days from the day we receive your request.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Data storage</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                We store your information in our secure database. We don&apos;t share access to our database to any third party entity.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Cookies / Tracking Technologies from your use of our website</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                We do not currently use tracking cookies. Our website may use cookies in the future for a variety of purposes. These cookies may provide us with information, including personal information, other information about devices and networks you utilize to access our Websites and Services, and information regarding your interactions with and in our website. For detailed information about the use of cookies in the website (including information about how you can control cookies), please read and review our <a href="https://board.support/cookie" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold hover:underline">Cookie Policy</a>. Tags and scripts may be used in our websites or in emails. These assist us in delivering cookies, counting visits to our website, understanding usage and campaign effectiveness and determining whether an email has been opened and acted upon. We may receive reports based on the use of these technologies by our service providers on an individual and aggregated basis. We use Local Storage Objects (LSOs) such as HTML5 to store content information and preferences. Various browsers may offer their own management tools for removing HTML5 LSOs. Third parties with whom we partner to provide certain features on our website or to display advertising based upon your Web browsing activity use LSOs such as HTML5 and Flash to collect and store information.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Log files from your use of our website</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                As is true with most websites and services, we gather certain information automatically and store it in log files. This information includes internet protocol addresses, browser, internet service provider, referring/exit pages, operating system, date/time stamp, and click stream data as well as certain personal information such as user name, user email address and other information that may be included in open textual fields. Our application log files are subject to the same strict data security policies and procedures as apply to the application databases for our Services. We may combine this automatically collected log information with other information we collect about you. We do this to improve the Services that we offer you, to improve marketing, analytics, or Website functionality.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>Analytics Information from your use of our website</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed">
                                Analytics Information from Your Use Of Our Websites and Service: <br /> We collect analytics information when you use our website to help us improve them. We partner with a third party to either display advertising on our Websites or to manage our advertising on other sites. Our third party partner may use technologies such as cookies to gather information about your activities on our Websites and other sites in order to provide you advertising based upon your browsing activities and interests. In our Services, analytics information may consist of the feature and function of the Service being used, the associated domain name, the username and IP address of your Agent or End-User (which may include personal information if the personal information was incorporated into the username) and additional information required to detail the operation of the function and which parts of a Service are being affected. The analytics information we collect may include elements of Service Data related to the function the Agent or End-User is performing. As such, the analytics information we collect may include personal information or sensitive business information.
                            </p>
                        </section>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>How we use personal information</span>
                            </h2>
                            <div className="space-y-4 text-[14px] leading-relaxed">
                                <p>
                                    We use the personal information that we collect for a variety of purposes including to:
                                </p>
                                <p className="bg-[#F6F9FE] p-4 rounded-xl border border-brand-primary/20">
                                    We do not currently use any personal information apart from your email address, we only use it for sending you subscription notifications.
                                </p>
                                <ul className="space-y-3 list-disc pl-5 pt-2">
                                    <li>Enable you and your Agents and End Users to access and use our Services;</li>
                                    <li>Process and complete transactions, and send you related information, including purchase confirmations and invoices;</li>
                                    <li>Communicate with you, including responding to your comments, questions, and requests; providing customer service and support;</li>
                                    <li>Provide you with information about services, features, surveys, newsletters, offers, promotions, contests and events;</li>
                                    <li>Provide other news or information about us and our select partners; and sending you technical notices, updates, security alerts, and support and administrative messages;</li>
                                    <li>Monitor and analyze trends, usage, and activities in connection with our Services and for marketing or advertising purposes;</li>
                                    <li>Investigate and prevent fraudulent transactions, unauthorized access to our Services, and other illegal activities;</li>
                                    <li>For other purposes about which we notify you.</li>
                                </ul>
                            </div>
                        </section>
                    </RevealOnScroll>

                    {/* Section 7: Contact Information */}
                    <RevealOnScroll>
                        <section className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-brand-primary inline-block flex-shrink-0"></span>
                                <span>7. Contacting Our Privacy Team</span>
                            </h2>
                            <p className="text-[14px] leading-relaxed mb-6">
                                If you have questions, compliance inquiries, or specific feedback regarding this Privacy Policy or our data processing procedures, our dedicated support team is available to assist you:
                            </p>
                            <div className="bg-[#F6F9FE] p-5 rounded-xl border border-brand-primary/20 text-sm sm:text-base font-medium">
                                <p className="text-gray-600">Email: <a href="mailto:support@board.support" className="text-brand-primary underline font-semibold hover:opacity-80 transition-opacity">support@board.support</a></p>
                            </div>
                        </section>
                    </RevealOnScroll>
                </div>

                {/* Section 3: Footer */}
                <RevealOnScroll>
                    <div className="w-full bg-gradient-to-t from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] mt-16 sm:mt-24 md:mt-[120px]">
                        <div className="max-w-[1440px] mx-auto">
                            <Footer />
                        </div>
                    </div>
                </RevealOnScroll>
            </SmoothScroll>
        </div>
    );
};

export default PrivacyPolicyPage;
