
import metamaskImg from '../Images/metamask.png';
import coinbaseImg from '../Images/coinbase.jpg';
import phantomImg from '../Images/phantom.jpg';
import walletConnectImg from '../Images/walletconnect.png';


const ConnectWalletPage = () => {

    return (

        <div class="d-flex justify-content-center align-items-center bg-black vh-100 text-white ">
            <div class="card conn bg-dark text-light p-3 mx-auto">
                <h2 class="card-title mb-0">Connect your wallet</h2>
                
                <hr />
                <div class="card-body">
                    <div class="card bg-dark">
                        <a href="/pricing" class="btn btn-dark d-flex flex-row text-decoration-none">
                            <img src={metamaskImg} alt="metamask_logo" height="25px" width="25px" />
                            <p class="ms-3 text-light">Metamask</p>
                        </a>
                        <hr class="text-light m-0" />
                        <a href="/pricing" class="btn btn-dark d-flex flex-row text-decoration-none">
                            <img src={coinbaseImg} alt="metamask_logo" height="25px" width="25px" />
                            <p class="ms-3 text-light">Coinbase wallet</p>
                        </a>
                        <hr class="text-light m-0" />
                        <a href="/pricing" class="btn btn-dark d-flex flex-row text-decoration-none">
                            <img src={phantomImg} alt="metamask_logo" height="25px" width="25px" />
                            <p class="ms-3 text-light">Phantom</p>
                        </a>
                        <hr class="text-light m-0" />
                        <a href="/pricing" class="btn btn-dark d-flex flex-row text-decoration-none">
                            <img src={walletConnectImg} alt="metamask_logo" height="25px" width="25px" />
                            <p class="ms-3 text-light">WalletConnect</p>
                        </a>
                    </div>            
                </div>
                <div class="card-footer mt-4">
                    <p class="mb-0 text-secondary fst-italic">If you don't have a wallet yet, you can select a provider and create one now</p>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </div>

    )

}

export default ConnectWalletPage;