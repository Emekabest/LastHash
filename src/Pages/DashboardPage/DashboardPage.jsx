import "./Dashboard.css";
// import "bootstrap/dist/css/bootstrap.min.css";


const DashboardPage = () => {

    return(
            <div class="d-flex justify-content-center align-items-center bg-black text-light">
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark flex-column position-fixed vh-100" style="width: 220px; left: 0; top: 0;">
                <div>
                    <h4 class="text-light mt-3 mb-5">LastHash</h4>
                </div>        
                <ul class="navbar-nav flex-column w-75">
                    <li class="nav-item">
                        <a class="nav-link active" href="dashboard.html"><i class="fa fa-home me-2"></i>Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="beneficiaries.html"><i class="fa fa-users me-2"></i>Beneficiaries</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-cog me-2"></i>Settings</a>
                    </li>
                    <li class="nav-item mt-auto mb-3">
                        <a class="nav-link text-danger" href="#"><i class="fa fa-sign-out-alt me-2"></i>Logout</a>
                    </li>
                </ul>
                 </nav>
                 
               
            </div>
    )


}


export default DashboardPage;