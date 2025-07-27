const Beneficiaries = () => {


    return(
<div class="d-flex justify-content-center align-items-center bg-black text-light">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark flex-column position-fixed vh-100" style="width: 220px; left: 0; top: 0;">
        <div>
            <h4 class="text-light mt-3 mb-5">LastHash</h4>
        </div>        
        <ul class="navbar-nav flex-column w-75">
            <li class="nav-item">
                <a class="nav-link" href="dashboard.html"><i class="fa fa-home me-2"></i>Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="beneficiaries.html"><i class="fa fa-users me-2"></i>Beneficiaries</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-cog me-2"></i>Settings</a>
            </li>
            <li class="nav-item mt-auto mb-3">
                <a class="nav-link text-danger" href="#"><i class="fa fa-sign-out-alt me-2"></i>Logout</a>
            </li>
        </ul>
    </nav>
    <div style="margin-left:220px; width:100%; padding: 20px;">
        <div class="container m-2">
            <p class="float-end"><span><i class="fa-solid fa-user-circle" style="height: 25px; width: 25px;"></i></span>0x742d***8f44e</p>
            <h1>Beneficiaries</h1>
            <p class="text-light-emphasis">Manage who will recieve your assets on trigger</p>

            <h3 class="mt-4">Add Beneficiary</h3>
            <form class="mt-4 mb-5">
                <div class="col g-3">
                    <div class="col-md-4">
                        <label for="beneficiaryName" class="form-label">Name</label>
                        <input type="text" class="form-control bg-dark border border-dark text-light" id="beneficiaryName" placeholder="Enter name" required />
                    </div>
                    <div class="col-md-4">
                        <label for="walletAddress" class="form-label">Wallet Address</label>
                        <input type="text" class="form-control bg-dark border border-dark text-light" id="walletAddress" placeholder="0x..." required />
                    </div>
                    <div class="col-md-4">
                        <label for="distribution" class="form-label">Distribution (%)</label>
                        <input type="number" class="form-control bg-dark border border-dark text-light" id="distribution" min="1" max="100" placeholder="e.g. 25" required />
                    </div>
                </div>
                <button type="submit" class="btn btn-dark mt-3">Add Beneficiary</button>
            </form>

            <h3 class="mt-5">Current Beneficiaries</h3>
            <div class="card table-responsive">
                <table class="table table-dark table-striped align-middle mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Wallet Address</th>
                            <th scope="col">Distribution (%)</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jane Doe</td>
                            <td>0x1234...abcd</td>
                            <td>40</td>
                            <td>
                                <button class="btn btn-sm btn-outline-light me-2"><i class="fa fa-edit"></i></button>
                                <button class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>John Smith</td>
                            <td>0x5678...efgh</td>
                            <td>60</td>
                            <td>
                                <button class="btn btn-sm btn-outline-light me-2"><i class="fa fa-edit"></i></button>
                                <button class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>    

            <center><button class="btn btn-primary mt-4"><i class="fa-solid fa-file-contract"></i> Sign Contract</button></center>
        </div>     
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</div>
    )

}

export default Beneficiaries;