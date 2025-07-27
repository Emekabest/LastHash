
import './MyLanding.css';


const MyLanding = () => {
  return (
    <div className="container">
      <div className='header'>
        <div className="header-background-image"></div>
        <div className='header-dark-overlay'>
          <div className="header-top">
            <div className='header-top-left'>
              <h1>LastHash</h1>
            </div>

            <div className='header-top-right'>
              <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Support</a></li>
              </ul>
            </div>
          </div>


          <div className="header-body">
            <div className="header-body-content">
              <h2>Your Crypto Shouldn't Die With You</h2>
              <h3>Web3’s first Legacy-as-a-Service platform. <br /> Automated crypto wills and smart contract inheritance — for individuals, DAOs, and exchanges.</h3>
            </div>
            
          </div>
        </div>
      </div>


      <div className='main'>
        <div className='main1stContainer'>
          <a href='/connectwallet' className='main1stContainer-left-btn'>Get Started</a>
          <button className='main1stContainer-right-btn'>See How It Works</button>
        </div>

        <div className='main2ndContainer'>
          <h2>THE PROBLEM</h2>
          <p>
            Over $100 Billion in crypto has been lost forever.
            Because the owner died — and no one knew how to access it.
          </p>
          <p style={{fontSize:30}}>No plan. No inheritance. No goodbye.</p>
        </div>

        <div className="main3rdContainer">
          <div className='main3rdContainerTop'>
            <h2>How it Works</h2>
          </div>
          <div className='main3rdContainerBottom'>
            <div className='main3rdContainerBottom-left'>
              <section className='main3rdContainerBottom-left-section'>
                <div className='main3rdContainerBottom-left-section-icon'>
                  <i class="fas fa-check"></i>
                </div>
                <div className='main3rdContainerBottom-left-section-txt'>
                  <a>Connect Your Wallet</a>
                </div>
              </section>
              <section className='main3rdContainerBottom-left-section'>
                <div className='main3rdContainerBottom-left-section-icon'>
                  <i class="fas fa-check"></i>
                </div>
                <div className='main3rdContainerBottom-left-section-txt'>
                  <a>Add Your Beneficiaries Friends, family, teammates, even DAOs.</a>
                </div>
              </section>
              <section className='main3rdContainerBottom-left-section'>
                <div className='main3rdContainerBottom-left-section-icon'>
                  <i class="fas fa-check"></i>
                </div>
                <div className='main3rdContainerBottom-left-section-txt'>
                  <a>Smart Contract Executes. Your will is triggered.</a>
                </div>
              </section>

              <section className='main3rdContainerBottom-left-section' style={{borderBottom: 'none'}}>
                <div className='main3rdContainerBottom-left-section-icon'>
                  <i class="fas fa-check"></i>
                </div>
                <div className='main3rdContainerBottom-left-section-txt'>
                  <a>Your legacy lives on.</a>
                </div>
              </section>
             
            </div>


            <div className='main3rdContainerBottom-right'>
              <section className='main3rdContainerBottom-right-section'>
                <div className='main3rdContainerBottom-right-section-icon'>
                  <i class="fas fa-check"></i>
                </div>
                <div className='main3rdContainerBottom-right-section-txt'>
                  <a>Choose the assets you want to secure.</a>
                </div>
              </section>
              <section className='main3rdContainerBottom-right-section'>
                <div className='main3rdContainerBottom-right-section-icon'>
                  <i class="fas fa-check"></i>
                </div>
                <div className='main3rdContainerBottom-right-section-txt'>
                  <a>Set Triggers.</a>
                </div>
              </section>
              <section className='main3rdContainerBottom-right-section'>
                <div className='main3rdContainerBottom-right-section-icon'>
                  <i class="fas fa-check"></i>
                </div>
                <div className='main3rdContainerBottom-right-section-txt'>
                  <a>AI monitors inactivity or confirms death, biometrics, and more.</a>
                </div>
              </section>

              <section className='main3rdContainerBottom-right-section' style={{borderBottom: 'none'}}>
                <div className='main3rdContainerBottom-right-section-icon'>
                  <i class="fas fa-check"></i>
                </div>
                <div className='main3rdContainerBottom-right-section-txt'>
                  <a>Assets are sent.</a>
                </div>
              </section>
            </div>


          </div>
        </div>

        <div className='main4thContainer productFeaturesConainer'> 

          <div className="main4thContainer-header">
            <h2>Product Features</h2>
          </div>
          <div className="main4thContainer-content">
            <div className="main4thContainer-content-left">
              <div className='main4thContainer-content-left1'>
                <div className="main4thContainer-content-left1-imageContainer">
                  
                    
                </div>
                <div className='main4thContainer-content-left1-text'>
                    <h3>Multi-Chain Support (Ethereum, TON, BNB, more)</h3>
                    
                </div>
                
                
              </div>

              <div className='main4thContainer-content-left2'>
                <div className="main4thContainer-content-left2-imageContainer">

                </div>
                <div className='main4thContainer-content-left2-text'>
                    <h3>Dead Man Switch Logic
              (customizable timer)</h3>
                    
                </div>

              </div>
              <div className='main4thContainer-content-left3'>
                
                <div className="main4thContainer-content-left3-imageContainer">

                </div>
                <div className='main4thContainer-content-left3-text'>
                    <h3>Pass on your crypto even after demise.</h3>
                    
                </div>
              </div> 
            </div>


            <div className="main4thContainer-content-right">
              <div className='main4thContainer-content-right1'>
                  <div className='main4thContainer-content-right1-imageContainer'></div>
                  <div className='main4thContainer-content-right1-text'>
                    <h3>Encrypted Will NFTs</h3>
                    
                  </div>
              </div>

               <div className='main4thContainer-content-right1'>
                  <div className='main4thContainer-content-right1-imageContainer'></div>
                  <div className='main4thContainer-content-right1-text'>
                    <h3>Multi-Chain Support (Ethereum, TON, BNB, more)</h3>
                  </div>
              </div>

              <div className='main4thContainer-content-right3'>
                  <div className='main4thContainer-content-right3-imageContainer'></div>
                  <div className='main4thContainer-content-right3-text'>
                    <h3>A secure way to ensure that your legacy is preserved.</h3>
                  </div>
              </div>
              
             
            </div>
          </div>

        </div>


        <div className='main5thContainer PricingContainer'>
          <div className="main5thContainer-header">
            <h2>Pricing</h2>
          </div>
          <div className="main5thContainer-content">

            <div className='main5thContainer-content-left'>
              <div className='main5thContainer-content-left-heading main5thContainer-content-heading'> <h2>FREE TIER</h2></div>
              <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>1 Asset</h3></div>
              </div>

                <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                  <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                  <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>1 Beneficiary</h3></div>
              </div>

              <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>No Charges</h3></div>
              </div>

            </div>



             <div className='main5thContainer-content-center'>
                <div className='main5thContainer-content-left-heading main5thContainer-content-heading'> <h2>PRO</h2></div>
              <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>$5/mo</h3></div>
              </div>

                <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                  <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                  <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>More Assets</h3></div>
              </div>

              <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>AI Triggers</h3></div>
              </div>

              <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>Airdrops</h3></div>
              </div>

            </div>





            <div className='main5thContainer-content-right'>
                                  <div className='main5thContainer-content-left-heading main5thContainer-content-heading'> <h2>PREMIUM TIER</h2></div>
              <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>$10/mo</h3></div>
              </div>

                <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                  <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                  <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>More Assets</h3></div>
              </div>

              <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>AI Triggers</h3></div>
              </div>

              <div className='main5thContainer-content-left-Column1 main5thContainer-content-Column'>
                <div className='main5thContainer-content-left-Column1-icon main5thContainer-content-Column-icon'><i class="fas fa-check"></i></div>
                <div className='main5thContainer-content-left-Column1-text main5thContainer-content-Column-text' ><h3>Airdrops</h3></div>
              </div>
            </div>

          </div>


        </div>



        <div className='main6thContainer'>
          <div className="main5thContainer-header">
            <h2>Get Early Access</h2>
          </div>

          <div className='main6thContainer-content'>
            <h3>Join hundreds of early believers 
building the future of crypto afterlife.
</h3>
          </div>

          
        </div>


        <div className='main7thContainer'>
          <div className="main5thContainer-header">
            <h2>For Who?</h2>
          </div>

          <div className='main7thContainer-content'>
            <div><h3>Crypto investors and holders</h3></div>
             <div><h3>Freelancers and digital nomads</h3></div>
              <div><h3>DeFi and NFT traders</h3></div>
              <div><h3>People with dependents or long-term savings goal</h3></div>
          </div>

        </div>

      </div>


      <footer className='footer'>
        <div className='footer-content1'>
          <div className='footer-content1-icon'> <i class="fab fa-facebook"></i></div>
          <div className='footer-content1-icon'> <i class="fab fa-twitter"></i></div>
          <div className='footer-content1-icon'> <i class="fab fa-whatsapp"> </i></div>
          <div className='footer-content1-icon'> <i class="fab fa-instagram"> </i></div>

        </div>
        <div className='footer-content2'>
          <h2>Built by Crypto natives. Backed by believers</h2>
        </div>
        <div className='footer-content3'>
            <p>@copyright. @2025.  LastHash</p>
        </div>



      </footer>

    
    </div>
  );
}

export default MyLanding;