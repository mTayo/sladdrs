import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
      <>
        <header>
            <div className='logo-and-links-container'>
              <div className='links'>
                <div>
                    <a 
                        href='https://www.facebook.com/Sladdrs' 
                        target={'_blank'} rel="noreferrer"
                      >
                      <img src="/images/facebook.svg" alt='Sladdrs facebook'/>
                    </a>
                </div>
                <div>
                    <a 
                      href='https://twitter.com/sladdrs' 
                      target={'_blank'} rel="noreferrer"
                    >
                      <img src="/images/twitter.svg" alt='Sladdrs twitter'/>
                    </a>
                </div>
                <div>
                  <a 
                    href='https://www.instagram.com/sladdrs/' 
                    target={'_blank'} rel="noreferrer"
                  >
                      <img src="/images/instagram.svg" alt='Sladdrs instagram'/>
                  </a>
                </div>
              </div>
              <div className='logo'>
                <img src="/images/Sladdrs-Logo-White.png" alt='Sladdrs logo' />
              </div>
            </div>
            <div className='header-text'>
              For Sports ● For Banter ● For Wonga ● For Honour
            </div>
        </header>
        <section className='body'> 
            <section className='first-section'>
              <img src="/images/hero.png"  alt="Sladdrs hero"/>
            </section>

            <section className='second-section'>
              <div className='section-img'>
                  <img src='/images/Sladdrs Square 1.jpg' />
              </div>
              <div className='section-text'>
                  <span className='section-font-1 '>
                    BRAND NEW SPORTS CONTENT APP <br/>
                  </span>
                  <span className='section-font-2'>
                    Chance to WIN $100, $50 or $20 per matchday<br/>
                  </span>
                  <span className='section-font-3'>
                    Download NOW & place your EPL predictions for March 5th!<br/>
                  </span>
                  <div className='play-download'>
                      <a 
                        href='https://play.google.com/store/apps/details?id=com.sladdrs.android' 
                        target={'_blank'} rel="noreferrer"
                      >
                        <img src="/images/Google_Play-Badge-Logo.wine.svg" alt='download sladdrs app playstore' />
                      </a>
                  </div>
                  
              </div>
              
            </section>

            
            <section className='third-section'>
              <div className='section-text'>
                  <span className='section-font-1'>
                    Compete against your friends & others <br/> in our English Premier League predictions <br/>
                  </span>
                  <span className='section-font-2'>
                    See leaderboards of just you & your friendsy <br/>
                  </span>
                  <span className='section-font-3'>
                    Create, share & view sports related content <br/>
                  </span>
              </div>
              <div className='section-img'>
                  <img src='/images/Instagram 2.jpg' />
              </div>
              
            </section>


            <section className='fourth-section'>
              <div className='section-img'>
                  <img src='/images/instagram.jpg' />
              </div>
              <div className='section-text'>
                  <span className='section-font-2 '>
                  Get your FREE 30-day Premium Trial &<br/> be amongst the FIRST to ever try Sladdrs* <br/>
                  </span>
                  
                  <div className='play-download'>
                    <a 
                        href='https://play.google.com/store/apps/details?id=com.sladdrs.android' 
                        target={'_blank'} rel="noreferrer"
                      >
                      <img src="/images/Google_Play-Badge-Logo.wine.svg" alt='download sladdrs app playstore' />
                    </a>
                  </div>

                  <div className='small-text'> 
                    *at the end of your trial, you will be asked to complete some questions about your experience with the ap
                  </div>
              </div>
            </section>
        </section>
        <footer>
          <div className='logo-container'>
            <img src="/images/Sladdrs-Logo-White.png" alt='Sladdrs logo' />
          </div>
         
        </footer>
      </>
  )
}

export default Home;
