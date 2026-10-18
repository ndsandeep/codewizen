import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const OurLocation = () => {
  return (
    <>
      <PageHero 
        title="Our Location" 
        description="Discover comprehensive details and insights about our training institute location."
        breadcrumbs={[
          { label: "About", link: "/about-us" },
          { label: "Our Location" }
        ]}
      />
      
      <section className="generic-page-section" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div data-aos="fade-up">
          <h2 style={{ color: '#112255', marginBottom: '20px', fontSize: '32px' }}>Visit Our Campus</h2>
          <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
            Welcome to Codewizen. We are centrally located in Hyderabad's premier IT hub, easily accessible for all students.
          </p>
          
          {/* Exact Address Highlight Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '2px solid #e2e8f0',
            borderLeft: '6px solid #ea580c',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(17, 34, 85, 0.08)',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: '#fff3ed',
                color: '#ea580c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                flexShrink: 0
              }}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ea580c', display: 'block', marginBottom: '4px' }}>OFFICIAL ADDRESS</span>
                <h3 style={{ color: '#112255', fontSize: '20px', margin: 0, fontWeight: '700' }}>
                  Flat No 101, R V Heights, Hitech City Kothaguda,
                </h3>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/DgGVjhvx31cUVycM9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              Open in Google Maps <FaExternalLinkAlt style={{ fontSize: '13px' }} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '20px' }}>
            
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #e87500' }}>
              <h3 style={{ color: '#112255', marginBottom: '15px' }}>Key Benefits</h3>
              <ul style={{ color: '#475569', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Industry-aligned curriculum</li>
                <li>Hands-on practical sessions</li>
                <li>Expert mentorship</li>
                <li>Dedicated career support</li>
              </ul>
            </div>
            
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #112255' }}>
              <h3 style={{ color: '#112255', marginBottom: '15px' }}>Next Steps</h3>
              <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '20px' }}>
                Ready to take the next step in your career journey? Enroll in our program today or book a free demo session to learn more.
              </p>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Link to="/contact-us" className="btn-primary">Book Free Demo</Link>
                <Link to="/contact-us" className="btn-outline">Contact Us</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OurLocation;
