import { Mail,Phone,MapPin } from "react-feather";
function ContactInfo() {
  return (
    <section id="contact" className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Contactez Nous</h2>
          <div className="space-y-6 mx-auto max-w-md">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4"></MapPin>
              <div>
                <h3 className="font-bold">Adresse</h3>
                <a href="https://www.google.com/maps/place/K+S+Driving+School/@45.5257771,-73.6246395,17z/data=!4m16!1m9!3m8!1s0x4cc9190a30f86c09:0xd480ffd14479dacd!2sK+S+Driving+School!8m2!3d45.5257771!4d-73.6246395!9m1!1b1!16s%2Fg%2F11c5smt26g!3m5!1s0x4cc9190a30f86c09:0xd480ffd14479dacd!8m2!3d45.5257771!4d-73.6246395!16s%2Fg%2F11c5smt26g?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                  <p>852 Jean Talon Ouest, Suite 200<br />Montreal, QC H3N 1S4</p>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4"></Phone>
              <div>
                <h3 className="font-bold">Téléphone</h3>
                <a href="tel:(514)999-3430" target="_blank">(514) 999-3430</a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4"></Mail>
              <div>
                <h3 className="font-bold">Courriel</h3>
                <a href="mailto:ksdrivingschool16@gmail.com" target="_blank">ksdrivingschool16@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactInfo;