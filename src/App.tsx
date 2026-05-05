import { motion } from "motion/react";
import { 
  Calendar, MapPin, Building, Clock, Plane, Train, Car, 
  Phone, Mail, Info, AlertCircle, Coffee, Users, CheckCircle2,
  ChevronRight, Globe
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-cibus-bg text-gray-800 font-sans selection:bg-cibus-green/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663084605563/XyPFQUFfQvWRrE3FALxRph/cibus-official-logo_6131d080.png" 
              alt="CIBUS Official Logo" 
              className="h-12 md:h-14 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-cibus-blue">
            <a href="#about" className="hover:text-cibus-green transition-colors">About</a>
            <a href="#agenda" className="hover:text-cibus-green transition-colors">Agenda</a>
            <a href="#venue" className="hover:text-cibus-green transition-colors">Venue</a>
            <a href="#travel" className="hover:text-cibus-green transition-colors">Travel</a>
            <a href="#contact" className="hover:text-cibus-green transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden print:pt-10 print:pb-10">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663084605563/XyPFQUFfQvWRrE3FALxRph/viana-hero_cdab579f.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-cibus-blue/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-cibus-blue/80 via-cibus-blue/60 to-cibus-bg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* CIBUS Green Banner */}
            <div className="bg-cibus-lightgreen h-12 md:h-16 w-full max-w-md mb-8 relative flex items-center justify-center clip-banner shadow-lg">
              <div className="text-white font-bold text-2xl md:text-3xl tracking-wide">
                CIBUS
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight"
            >
              Recognise <span className="text-cibus-lightgreen">CIBUS</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white/90 mb-10 leading-tight"
            >
              Cutting food loss and waste in Europe
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="text-xl font-bold text-white">5th Transnational Meeting</div>
              <div className="hidden md:block w-px h-8 bg-white/30"></div>
              <div className="text-lg font-medium text-white/90 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cibus-orange" /> 19-20 May 2026
              </div>
              <div className="hidden md:block w-px h-8 bg-white/30"></div>
              <div className="text-lg font-medium text-white/90 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cibus-orange" /> Viana do Castelo, Portugal
              </div>
            </motion.div>

          </div>

          {/* Hexagon Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 md:mt-24">
            <HexagonStat 
              icon={<Globe className="w-8 h-8 text-cibus-green" />} 
              title="8 Countries" 
              subtitle="9 Partners" 
              outline 
            />
            <HexagonStat 
              title="1,71" 
              subtitle="MEURO" 
              subtext="EU Funding" 
            />
            <HexagonStat 
              title="April 2024" 
              subtitle="-" 
              subtext="June 2028" 
            />
            <div className="flex items-center justify-center">
              <a href="https://www.interregeurope.eu/CIBUS" target="_blank" rel="noreferrer" className="bg-cibus-green text-white font-bold py-4 px-6 rounded-lg hover:bg-cibus-lightgreen transition-colors w-full text-center shadow-xl border border-white/20">
                www.interregeurope.eu/CIBUS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-cibus-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-cibus-blue mb-6">Welcome to Viana do Castelo</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are delighted to welcome you to the 5th Transnational Meeting of the CIBUS project in the beautiful city of Viana do Castelo, Portugal. Hosted by the <strong>Comunidade Intermunicipal do Alto Minho (CIM Alto Minho)</strong>, this meeting brings together partners from across Europe to advance our shared mission of reducing food loss and waste.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Over the next two days, we will collaborate on innovative solutions, exchange best practices, and strengthen our commitment to building a more sustainable food system across Europe. Beyond the formal sessions, we invite you to experience the warmth of Portuguese hospitality and the charm of this historic coastal city.
          </p>
        </div>
      </section>

      {/* About CIBUS Section */}
      <section id="about" className="py-20 bg-white print:break-before-page print:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="About CIBUS" subtitle="Cutting Food Loss and Waste in Europe" />
          
          <p className="text-lg text-gray-600 max-w-4xl mb-16">
            CIBUS is a four-year Interreg Europe project (April 2024 - June 2028) uniting nine partners and two associated policy authorities from eight European countries in a coordinated effort to reduce food loss and waste across the production and supply chain.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <PillarCard 
              number="1" 
              title="Multi-Stakeholder Platforms" 
              desc="Engage public and private sectors, spread knowledge, identify impactful measures." 
            />
            <PillarCard 
              number="2" 
              title="Innovation Capacity" 
              desc="Promote circularity, cross-sector approaches, and new market opportunities." 
            />
            <PillarCard 
              number="3" 
              title="Data & Transparency" 
              desc="Increase data availability, consistency, and create evaluation frameworks." 
            />
            <PillarCard 
              number="4" 
              title="Integrated Strategies" 
              desc="Define strategies aligned with SDG 12.3 and integrate into broader policy areas." 
            />
          </div>

          <div className="bg-cibus-bg rounded-2xl p-8 md:p-12 border-t-4 border-cibus-green">
            <h3 className="text-2xl font-bold text-cibus-blue mb-8">Our Partnership</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-gray-700">
              <PartnerItem country="Bulgaria" name="Bulgarian Association of Municipal Environmental Experts (Lead)" />
              <PartnerItem country="Cyprus" name="Nicosia Development Agency" />
              <PartnerItem country="Portugal" name="Alto Minho Intermunicipal Community" />
              <PartnerItem country="Denmark" name="Vejle Municipality" />
              <PartnerItem country="Romania" name="Maramures County Council" />
              <PartnerItem country="Finland" name="Regional Council of Häme, Häme UAS" />
              <PartnerItem country="Ireland" name="Galway County Council" />
              <PartnerItem country="Belgium" name="City Liège" />
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 bg-cibus-blue text-white print:break-before-page print:py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meeting Agenda</h2>
          <div className="w-20 h-1 bg-cibus-green mb-12"></div>
          
          <div className="grid gap-8">
            <div className="bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cibus-lightgreen mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6" /> Day 1 — Tuesday, 19 May 2026
              </h3>
              <ul className="space-y-6">
                <AgendaItem 
                  time="09:00 – 09:15" 
                  text="Registration, welcome coffee and agenda overview" 
                  location="Sala Couto Viana, Biblioteca Municipal de Viana do Castelo" 
                />
                <AgendaItem 
                  time="09:15 – 10:00" 
                  text={
                    <div className="space-y-2">
                      <p>Welcoming session and presentation of the Alto Minho region</p>
                      <p className="text-sm">by an elected representative and a member of the Alto Minho CIBUS team</p>
                    </div>
                  } 
                  location="Sala Couto Viana, Biblioteca Municipal de Viana do Castelo" 
                />
                <AgendaItem 
                  time="10:00 – 12:00" 
                  text={
                    <div className="space-y-2">
                      <p className="font-semibold">Thematic Sessions: Food Loss and Waste Prevention in Alto Minho</p>
                      <ul className="text-sm space-y-1 pl-4 list-disc">
                        <li><strong>10:00</strong> – Food Design Thinking methodology in the implementation of CIBUS in Alto Minho</li>
                        <li><strong>10:30</strong> – Food waste reduction project at the Viana do Castelo School of Hospitality and Tourism</li>
                        <li><strong>11:00</strong> – The Food Bank as a mechanism for managing food waste from agricultural production and the regional agri food industry</li>
                        <li><strong>11:30</strong> – Viana Abraça project, including a practical demonstration of the waste collection system</li>
                      </ul>
                    </div>
                  } 
                  location="Sala Couto Viana, Biblioteca Municipal de Viana do Castelo" 
                />
                <AgendaItem 
                  time="12:00 – 13:30" 
                  text={
                    <div className="space-y-2">
                      <p className="font-semibold">Interactive workshop led by ANEL</p>
                      <p className="text-sm font-medium">Joint reflection on CIBUS steps and policy improvements</p>
                      <p className="text-sm">This interactive workshop, led by ANEL, brings together Project Partners and their stakeholders to reflect collaboratively on the implementation of the CIBUS steps towards policy improvements. Participants will share experiences and highlight good practices emerging from the consolidated matrix table process.</p>
                    </div>
                  } 
                  location="Sala Couto Viana, Biblioteca Municipal de Viana do Castelo" 
                />
                <AgendaItem 
                  time="13:30 – 15:00" 
                  text={
                    <div className="space-y-2">
                      <p>Presentation of Alto Minho gastronomy products, including a buffet lunch featuring regional products</p>
                      <p>Good Practices Showcase: poster display and presentations</p>
                    </div>
                  } 
                  location="Biblioteca Municipal de Viana do Castelo" 
                />
                <AgendaItem 
                  time="15:00 – 16:00" 
                  text={
                    <div className="space-y-2">
                      <p className="font-semibold">Steering Group Meeting</p>
                      <p className="text-sm">Presentation of the Action Plan concept, required for partners who have not achieved a policy improvement by the end of the Core Phase.</p>
                    </div>
                  } 
                  location="Sala Couto Viana, Biblioteca Municipal de Viana do Castelo" 
                />
                <AgendaItem 
                  time="16:00 – 16:30" 
                  text="Coffee break" 
                  location="Biblioteca Municipal de Viana do Castelo" 
                />
                <AgendaItem 
                  time="17:00 – 19:00" 
                  text="Free time" 
                  location="Viana do Castelo city centre" 
                />
                <AgendaItem 
                  time="19:00 – 21:00" 
                  text={
                    <div className="space-y-2">
                      <p className="font-semibold">Partner dinner at Restaurante Pedagógico Santiago, hosted by the Viana do Castelo School of Hospitality and Tourism</p>
                      <p className="text-sm">The team behind the Santiago Educational Restaurant will present their concept and training approach, combining specialised technical training with strong personal development and innovation oriented learning methodologies.</p>
                    </div>
                  } 
                  location="Restaurante Pedagógico Santiago" 
                />
              </ul>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cibus-lightgreen mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6" /> Day 2 — Wednesday, 20 May 2026
              </h3>
              <ul className="space-y-6">
                <AgendaItem 
                  time="09:15" 
                  text={
                    <div className="space-y-2">
                      <p className="font-semibold">Meeting point and registration</p>
                      <p className="text-sm">Meeting point: <a href="https://maps.app.goo.gl/jKPWJdzmsZdnKTBEA" target="_blank" rel="noreferrer" className="text-cibus-lightgreen hover:underline">https://maps.app.goo.gl/jKPWJdzmsZdnKTBEA</a></p>
                      <p className="text-sm">Participants are requested to arrive independently at the meeting point. Transfer by bus to the study visit locations.</p>
                    </div>
                  }
                />
                <AgendaItem 
                  time="09:30 – 11:00" 
                  text={
                    <div className="space-y-2">
                      <p className="font-semibold">Study Visit: Food Bank of Viana do Castelo</p>
                      <p className="text-sm">Guided visit and presentation on the role of the Food Bank in managing food surplus and preventing food waste across agricultural production, food processing and distribution chains. The visit will include a knowledge exchange on operational models, logistics and partnerships at regional level.</p>
                    </div>
                  } 
                  location="Viana do Castelo" 
                />
                <AgendaItem 
                  time="12:30 – 14:30" 
                  text={
                    <div className="space-y-2">
                      <p className="font-semibold">Lunch focused on food waste reduction strategies</p>
                      <p className="text-sm">Lunch hosted by Escola Básica e Secundária de Muralhas do Minho, highlighting practical approaches to food waste prevention implemented in school canteens and educational food systems.</p>
                    </div>
                  } 
                  location="Valença" 
                />
                <AgendaItem 
                  time="15:00 – 16:30" 
                  text={
                    <div className="space-y-2">
                      <p className="font-semibold">Study Visit: Centro Educativo da Facha</p>
                      <p className="text-sm">Guided visit and exchange of experiences on food waste reduction measures within an educational context, including awareness raising, daily operational practices and engagement of the school community.</p>
                    </div>
                  } 
                  location="Municipality: Ponte de Lima, School cluster: Agrupamento de Escolas de Ponte de Lima" 
                />
                <AgendaItem 
                  time="17:00" 
                  text="Return to Viana do Castelo" 
                />
                <AgendaItem 
                  time="From 17:30" 
                  text="Free time" 
                  location="Viana do Castelo city centre" 
                />
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-cibus-orange/20 border-l-4 border-cibus-orange p-4 rounded-r text-sm text-white/90">
            <strong>Travel note:</strong> Travel time between Viana do Castelo and Valença is approximately 50 minutes by bus.
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 bg-white print:break-before-page print:py-10">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle title="Meeting Venue" subtitle="Biblioteca Municipal de Viana do Castelo" />
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-cibus-bg p-8 rounded-2xl border-l-4 border-cibus-blue shadow-sm">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-cibus-orange shrink-0" />
                    <div>
                      <div className="font-bold text-cibus-blue mb-1">Address</div>
                      <div className="text-gray-600">Alameda 5 de Outubro, 4900-515 Viana do Castelo, Portugal</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-cibus-orange shrink-0" />
                    <div>
                      <div className="font-bold text-cibus-blue mb-1">Phone</div>
                      <div className="text-gray-600">+351 258 809 340</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-6 h-6 text-cibus-orange shrink-0" />
                    <div>
                      <div className="font-bold text-cibus-blue mb-1">Accessibility</div>
                      <div className="text-gray-600">Fully accessible with elevator and ramps</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mt-8 text-gray-600 leading-relaxed">
                The Municipal Library is a striking modern building designed by renowned architect Álvaro Siza Vieira, located directly on the Lima River waterfront. The contemporary architecture seamlessly blends with Viana do Castelo's historic charm, offering a professional and inspiring setting for our meeting.
              </p>
              <p className="mt-4 text-gray-600 font-medium">
                Location: City centre, 5-10 minutes walk from all recommended hotels and 10 minutes from the train station.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                <img 
                  src="https://www.altominho.tv/site/wp-content/uploads/2019/07/cropped-abelo_4465aa1.jpg" 
                  alt="Biblioteca Municipal de Viana do Castelo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" className="py-20 bg-cibus-bg print:break-before-page print:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Travel" subtitle="Getting to Viana do Castelo" />
          
          <div className="grid md:grid-cols-3 gap-6">
            <TravelCard 
              icon={<Plane className="w-8 h-8" />}
              title="By Air"
              content={
                <div className="space-y-4">
                  <div>
                    <strong className="text-cibus-blue block mb-1">Via Porto (OPO) - ~70km</strong>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>Metro to Campanhã (~35 min)</li>
                      <li>Train to Viana (~1h 30 min)</li>
                      <li>Or taxi/Uber (~75 min, €60-75)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-cibus-blue block mb-1">Via Vigo (VGO), Spain - ~60km</strong>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>Taxi/Bus to Vigo-Guixar station</li>
                      <li>Direct "Celta" train to Viana</li>
                    </ul>
                  </div>
                </div>
              }
            />
            <TravelCard 
              icon={<Train className="w-8 h-8" />}
              title="By Train"
              content={
                <div className="space-y-4">
                  <div>
                    <strong className="text-cibus-blue block mb-1">From Porto Campanhã</strong>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>Journey: 1h 20-1h 45 min</li>
                      <li>Book at cp.pt (~€5)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-cibus-blue block mb-1">From Vigo-Guixar (Spain)</strong>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>Direct "Celta" international train</li>
                      <li>Journey: ~1h 10 min</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600 italic mt-2">Station is centrally located.</div>
                </div>
              }
            />
            <TravelCard 
              icon={<Car className="w-8 h-8" />}
              title="By Car"
              content={
                <div className="space-y-4">
                  <div>
                    <strong className="text-cibus-blue block mb-1">From Porto</strong>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>A3 motorway northbound</li>
                      <li>~70 km (approx. 50 min)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-cibus-blue block mb-1">From Vigo (Spain)</strong>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>A55 to border, then A28</li>
                      <li>~50 km (approx. 35-45 min)</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600 italic mt-2">Parking: Praça da Liberdade</div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-20 bg-white print:break-before-page print:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Recommended Accommodation" subtitle="Where to stay in Viana do Castelo" />
          
          <div className="bg-cibus-bg border-l-4 border-cibus-orange p-5 text-gray-700 mb-10 rounded-r shadow-sm">
            Each participant is responsible for making and paying for their own hotel reservation. The hotels below have been contacted by CIM Alto Minho and are recommended for their proximity to the meeting venue. Please book early — availability for 19 May may be limited.
          </div>

          <div className="space-y-8">
            <HotelCard 
              name="Fábrica do Chocolate Hotel"
              address="Rua do Gontim 70–76, 4900-474 Viana do Castelo"
              stars="★★★★"
              rates={[
                { label: "Single room", value: "€85 / night" },
                { label: "Double / Twin room", value: "€99 / night" },
                { label: "City / tourist tax", value: "€1.50 / person / night" }
              ]}
              included={["Breakfast ✓", "Wi-Fi ✓", "VAT ✓", "Museum visit ✓", "Welcome drink ✓"]}
              bookingDetails={[
                { label: "Code", value: "Use reference FC-CIM when booking by email or phone" },
                { label: "Cancellation", value: "Free cancellation up to 7 days before arrival" },
                { label: "Payment", value: "50% deposit at booking; remainder payable during stay" },
                { label: "Methods", value: "Credit card, bank transfer, cash" },
                { label: "Invoicing", value: "Full name, address and VAT number required" }
              ]}
              contact={{ email: "reservas@fabricadochocolate.com", phone: "+351 258 244 000", web: "www.fabricadochocolate.com" }}
            />

            <HotelCard 
              name="Hotel Melo Alvim"
              address="Avenida Conde Carreira 28, 4900-343 Viana do Castelo"
              stars="★★★★"
              rates={[{ label: "All room types", value: "See website" }]}
              note="A 10% discount is available exclusively for CIBUS meeting participants. Apply discount code 10CIBUS when booking online."
              bookingDetails={[
                { label: "How to book", value: "Via www.hotelmeloalvim.com — enter code 10CIBUS at checkout" },
                { label: "Cancellation", value: "Per rate selected on website" },
                { label: "Contact", value: "Andreia Morence — Front Office Team" }
              ]}
              contact={{ email: "hotel.meloalvim@unlockhotels.com", phone: "+351 258 808 200 / +351 967 715 047", web: "www.hotelmeloalvim.com" }}
            />

            <HotelCard 
              name="Hotel Rali Viana"
              address="Avenida D. Afonso III 180, 4900-477 Viana do Castelo"
              stars="★★★"
              rates={[{ label: "All room types", value: "See website" }]}
              note="⚠️ Limited availability on the night of 19 May. Participants are strongly encouraged to book as early as possible directly via the hotel website."
              bookingDetails={[
                { label: "How to book", value: "Directly via www.hotelraliviana.com — real-time availability and rates" },
                { label: "Contact", value: "Jorge Sousa, General Manager" },
                { label: "Note", value: "Individual reservations only; no group block available" }
              ]}
              contact={{ email: "jorgesousa@hotelraliviana.com", phone: "+351 258 829 770 / +351 967 384 685", web: "www.hotelraliviana.com" }}
            />

            <HotelCard 
              name="Hotel do Parque"
              address="Praça Galiza, 4900-476 Viana do Castelo"
              stars="★★★"
              rates={[{ label: "All room types", value: "See website" }]}
              note="ℹ️ Special event rates are being finalised. Please mention the CIBUS meeting when enquiring."
              bookingDetails={[
                { label: "How to book", value: "Via www.hoteldoparque.com or by phone" },
                { label: "Contact", value: "Paulo Pedra, Director" },
                { label: "Facilities", value: "Swimming pool on-site" }
              ]}
              contact={{ email: "hparque@hoteldoparque.com", phone: "+351 258 828 605", web: "www.hoteldoparque.com" }}
            />

            <HotelCard 
              name="Hotel Laranjeira"
              address="Rua Cândido dos Reis 45, 4900-082 Viana do Castelo"
              stars="★★"
              about="Centrally located hotel steps from the historic city centre, on the Camino Português route. Known for its friendly, attentive service and good value. Breakfast included. Walking distance to the meeting venue and main attractions."
              note="ℹ️ Tariff details to be confirmed. Please contact the hotel directly and mention the CIBUS meeting when enquiring."
              contact={{ phone: "+351 258 822 261" }}
            />

            <HotelCard 
              name="AP Dona Aninhas"
              address="Largo Vasco da Gama 38, 4900-322 Viana do Castelo"
              stars="★★★★"
              about="Elegant boutique hotel in the heart of the city centre, steps from the main square and cultural attractions. Features a spa with massage services, spacious and well-appointed rooms, and live piano music at breakfast. Highly rated for service and atmosphere. Free public parking available nearby (5 min walk)."
              included={["Spa & Massage ✓", "Breakfast ✓", "City centre ✓", "Free parking nearby ✓"]}
              note="ℹ️ Tariff details to be confirmed. Please contact the hotel directly and mention the CIBUS meeting when enquiring."
              contact={{ phone: "+351 258 248 570" }}
            />

            <HotelCard 
              name="Flôr de Sal Hotel by The Editory"
              address="Avenida de Cabo Verde 100, 4900-568 Viana do Castelo"
              stars="★★★★"
              about="Modern seafront hotel located on the Atlantic coast, approximately 15 minutes on foot from the city centre. Features spacious rooms with ocean-facing balconies, an on-site restaurant, swimming pool, spa, sauna, hammam, and a large fitness centre. Ideal for participants looking for a more relaxed seaside setting."
              included={["Ocean view ✓", "Pool & Spa ✓", "Restaurant ✓", "Gym ✓", "Breakfast ✓"]}
              note="ℹ️ Tariff details to be confirmed. Please contact the hotel directly and mention the CIBUS meeting when enquiring. Note: this hotel is ~15 min walk from the meeting venue."
              contact={{ phone: "+351 258 800 100" }}
            />
          </div>
        </div>
      </section>

      {/* Discover & Practical Info */}
      <section className="py-20 bg-cibus-bg print:break-before-page print:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Discover */}
            <div>
              <h2 className="text-3xl font-bold text-cibus-blue mb-2">Discover Viana do Castelo</h2>
              <div className="w-16 h-1 bg-cibus-green mb-8"></div>
              
              <p className="text-gray-600 mb-8">
                Viana do Castelo is a captivating blend of history, culture, and natural beauty, set between the Atlantic Ocean and the lush green hills of the Minho region. The city offers numerous attractions and experiences for your free time.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-cibus-blue flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-cibus-orange" /> Must-See Landmarks
                  </h4>
                  <ul className="space-y-2 text-gray-600 pl-7">
                    <li><strong className="text-gray-800">Santuário de Santa Luzia:</strong> Iconic white basilica with panoramic views</li>
                    <li><strong className="text-gray-800">Praça da República:</strong> Historic central square with traditional architecture</li>
                    <li><strong className="text-gray-800">Old Town:</strong> Medieval streets and historic buildings</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg text-cibus-blue flex items-center gap-2 mb-3">
                    <Coffee className="w-5 h-5 text-cibus-orange" /> Local Cuisine
                  </h4>
                  <ul className="space-y-2 text-gray-600 pl-7">
                    <li><strong className="text-gray-800">Bacalhau:</strong> Traditional salt cod dishes (local specialty)</li>
                    <li><strong className="text-gray-800">Vinho Verde:</strong> Famous light, sparkling white wine from the region</li>
                    <li><strong className="text-gray-800">Dining Times:</strong> Lunch 12:30-14:30, Dinner from 19:30</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Practical Info */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border-t-4 border-cibus-orange shadow-sm">
              <h2 className="text-2xl font-bold text-cibus-blue mb-8">Practical Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cibus-bg rounded-full flex items-center justify-center shrink-0 shadow-sm text-cibus-orange text-xl">🌤️</div>
                  <div>
                    <h4 className="font-bold text-cibus-blue mb-1">Weather (May)</h4>
                    <p className="text-sm text-gray-600 mb-2">Mild and pleasant conditions expected.</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li><strong>Temperature:</strong> 19-21°C</li>
                      <li><strong>Conditions:</strong> Mostly sunny</li>
                      <li><strong>Packing:</strong> Light jacket, umbrella</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cibus-bg rounded-full flex items-center justify-center shrink-0 shadow-sm text-cibus-orange text-xl">💶</div>
                  <div>
                    <h4 className="font-bold text-cibus-blue mb-1">Currency & Payments</h4>
                    <p className="text-sm text-gray-600 mb-2">Portugal uses the Euro (€).</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Cards widely accepted</li>
                      <li>ATMs (Multibanco) readily available</li>
                      <li>Contactless payments accepted</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cibus-bg rounded-full flex items-center justify-center shrink-0 shadow-sm text-cibus-orange text-xl">🔌</div>
                  <div>
                    <h4 className="font-bold text-cibus-blue mb-1">Connectivity</h4>
                    <p className="text-sm text-gray-600 mb-2">Stay connected throughout your visit.</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Wi-Fi at venue & hotels</li>
                      <li>EU roaming: No extra charges</li>
                      <li>Plugs: Type F (Schuko)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cibus-blue text-white print:break-before-page print:py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
            <div className="w-20 h-1 bg-cibus-green mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ContactCard 
              name="Ricardo Sousa Lemos"
              role="Project Contact"
              position="Senior Technician, Economy & Innovation"
              email="ricardo.lemos@cim-altominho.pt"
              phone="+351 965 528 614"
            />
            <ContactCard 
              name="Sandra Estevéns"
              role="Project Contact"
              position="Environment & Territory Unit"
              email="sandra.estevens@cim-altominho.pt"
              phone="+351 965 201 452"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
            <div>
              <div className="font-bold text-white text-lg mb-4">CIBUS Project</div>
              <p className="mb-4">Cutting food loss and waste in Europe through innovative cooperation and sustainable practices.</p>
            </div>
            <div>
              <div className="font-bold text-white text-lg mb-4">Host Organization</div>
              <p className="text-white mb-1">Comunidade Intermunicipal do Alto Minho (CIM Alto Minho)</p>
              <p>Rua Bernardo Abrunhosa, n.º 105</p>
              <p>4900-309 Viana do Castelo, Portugal</p>
            </div>
            <div>
              <div className="font-bold text-white text-lg mb-4">Co-Funded By</div>
              <p>This project is co-financed by the European Union through the Interreg Europe programme.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 CIBUS Project. All rights reserved.</p>
            <p className="text-center md:text-right max-w-2xl">
              The content of this brochure reflects the views of the authors. The European Commission cannot be held responsible for any use which may be made of the information contained therein.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components ---

function SectionTitle({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-cibus-blue mb-2">{title}</h2>
      <div className="text-xl text-cibus-green font-medium mb-4">{subtitle}</div>
      <div className="w-20 h-1 bg-cibus-orange"></div>
    </div>
  );
}

function HexagonStat({ icon, title, subtitle, subtext, outline = false }: any) {
  if (outline) {
    return (
      <div className="aspect-square w-full max-w-[180px] mx-auto relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cibus-green clip-hexagon"></div>
        <div className="absolute inset-[2px] bg-white clip-hexagon flex flex-col items-center justify-center p-4 text-center">
          {icon && <div className="mb-2">{icon}</div>}
          <div className="font-bold text-cibus-blue leading-tight">{title}</div>
          <div className="text-sm text-gray-600 font-medium">{subtitle}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-square w-full max-w-[180px] mx-auto bg-cibus-green clip-hexagon flex flex-col items-center justify-center p-4 text-center text-white shadow-lg">
      <div className="font-bold text-2xl leading-tight">{title}</div>
      <div className="font-bold text-lg leading-tight">{subtitle}</div>
      {subtext && <div className="text-xs mt-1 font-medium opacity-90">{subtext}</div>}
    </div>
  );
}

function PillarCard({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-cibus-blue print:break-inside-avoid">
      <div className="w-10 h-10 bg-cibus-lightgreen text-cibus-blue font-bold text-xl flex items-center justify-center rounded-full mb-4">
        {number}
      </div>
      <h4 className="font-bold text-lg text-cibus-blue mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function PartnerItem({ country, name }: { country: string, name: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-cibus-orange mt-1">•</span>
      <div>
        <strong className="text-cibus-blue">{country}:</strong> {name}
      </div>
    </div>
  );
}

function AgendaItem({ time, text, location }: { time: string, text: React.ReactNode, location?: string }) {
  return (
    <li className="flex gap-4 print:break-inside-avoid">
      <span className="font-bold text-cibus-lightgreen min-w-[110px] shrink-0">{time}</span>
      <div className="flex flex-col">
        <span className="text-white/90">{text}</span>
        {location && <span className="text-sm text-cibus-orange mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</span>}
      </div>
    </li>
  );
}

function TravelCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 print:break-inside-avoid">
      <div className="w-14 h-14 bg-cibus-bg rounded-full flex items-center justify-center text-cibus-blue mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-cibus-blue mb-4">{title}</h3>
      {content}
    </div>
  );
}

function HotelCard({ name, address, stars, rates, included, bookingDetails, contact, about, note }: any) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:break-inside-avoid">
      <div className="bg-cibus-blue text-white p-6 flex justify-between items-start">
        <div>
          <h4 className="font-bold text-xl">{name}</h4>
          <div className="text-sm text-white/80 mt-1">{address}</div>
        </div>
        <div className="text-cibus-orange tracking-widest">{stars}</div>
      </div>
      
      <div className="p-6 grid md:grid-cols-2 gap-8">
        <div>
          {about && (
            <div className="mb-6">
              <div className="text-xs font-bold text-cibus-green uppercase tracking-wider mb-2">About the hotel</div>
              <p className="text-sm text-gray-600">{about}</p>
            </div>
          )}
          
          {rates && rates.length > 0 && (
            <div className="mb-6">
              <div className="text-xs font-bold text-cibus-green uppercase tracking-wider mb-2">Rates</div>
              <div className="space-y-2">
                {rates.map((r: any, i: number) => (
                  <div key={i} className="flex justify-between text-sm border-b border-gray-100 pb-2 last:border-0">
                    <span className="text-gray-600">{r.label}</span>
                    <span className="font-bold text-cibus-blue">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {note && (
            <div className="bg-cibus-bg border-l-4 border-cibus-orange p-3 text-sm text-gray-700 mb-6">
              {note}
            </div>
          )}

          {included && included.length > 0 && (
            <div>
              <div className="text-xs font-bold text-cibus-green uppercase tracking-wider mb-2">Included</div>
              <div className="flex flex-wrap gap-2">
                {included.map((item: string, i: number) => (
                  <span key={i} className="bg-cibus-lightgreen/20 text-cibus-blue text-xs font-bold px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          {bookingDetails && bookingDetails.length > 0 && (
            <div className="mb-6">
              <div className="text-xs font-bold text-cibus-green uppercase tracking-wider mb-2">Booking Details</div>
              <div className="space-y-3 text-sm">
                {bookingDetails.map((b: any, i: number) => (
                  <div key={i}>
                    <strong className="text-cibus-blue block">{b.label}</strong>
                    <span className="text-gray-600">{b.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {contact.email && <div><strong className="text-cibus-blue">Email:</strong> <a href={`mailto:${contact.email}`} className="text-cibus-green hover:underline">{contact.email}</a></div>}
        {contact.phone && <div><strong className="text-cibus-blue">Phone:</strong> {contact.phone}</div>}
        {contact.web && <div><strong className="text-cibus-blue">Web:</strong> <a href={`https://${contact.web.replace('https://', '')}`} target="_blank" rel="noreferrer" className="text-cibus-green hover:underline">{contact.web}</a></div>}
      </div>
    </div>
  );
}

function ContactCard({ name, role, position, email, phone }: any) {
  return (
    <div className="bg-white/10 border border-white/20 p-8 rounded-xl backdrop-blur-sm print:break-inside-avoid">
      <div className="text-cibus-lightgreen text-sm font-bold uppercase tracking-wider mb-2">{role}</div>
      <h3 className="text-2xl font-bold text-white mb-6">{name}</h3>
      
      <div className="space-y-4 text-sm">
        <div className="flex gap-4">
          <span className="text-white/60 min-w-[70px]">Position</span>
          <span className="text-white font-medium">{position}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-white/60 min-w-[70px]">Email</span>
          <a href={`mailto:${email}`} className="text-cibus-lightgreen hover:underline font-medium">{email}</a>
        </div>
        <div className="flex gap-4">
          <span className="text-white/60 min-w-[70px]">Phone</span>
          <span className="text-white font-medium">{phone}</span>
        </div>
      </div>
    </div>
  );
}
