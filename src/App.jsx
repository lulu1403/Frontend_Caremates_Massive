import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import BeriDonasi from "./pages/Beridonasi";
import Pusatbantuan from "./pages/Pusatbantuan";
import Tentangkami from "./pages/Tentangkami";
import Buatakun1 from "./pages/Buatakun1";
import Buatakun2 from "./pages/Buatakun2";
import Buatakun3 from "./pages/Buatakun3";
import Galeripanti from "./pages/Galeripanti";
import Transaksi2 from "./pages/transaksi2";
import Login from "./pages/login";
import Pengajuanpenggalangan from "./pages/Pengajuanpenggalangan";
import Pengajuanpencairan from "./pages/Pengajuanpencairan";
import Detailyayasan from "./pages/Detailyayasan";
import Homepanti from "./pages/Homepanti";
import LogoutPopup from "./pages/Logout";
import Sudahpenggalangan from "./pages/sudahpenggalangan";
import Detaildonasi from "./pages/Detaildonasi";
import Loginadmin from "./pages/loginadmin";
import Homeadmin from "./pages/Homeadmin";
import Transaksi1 from "./pages/Transaksi1";
import Profile from "./pages/Profile";
import Notif from "./pages/Notif";
import Admin from "./pagesadmin/Dashboardadmin";
import AdminLembaga from "./pagesadmin/LembagaPage";
import Pusatbantuanadmin from "./pagesadmin/Pusatbantuanadmin";
import Admindata from "./pagesadmin/AdminPage";
import Notifpage from "./pagesadmin/NotifPage";
import Transaksipage from "./pagesadmin/TransaksiPage";
import Konfirmasidonasi from "./pages/Konfirmasidonasi";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beridonasi" element={<BeriDonasi />} />
        <Route path="/tentangkami" element={<Tentangkami />} />
        <Route path="/pusatbantuan" element={<Pusatbantuan />} />
        <Route path="/buatakun1" element={<Buatakun1 />} />
        <Route path="/buatakun2" element={<Buatakun2 />} />
        <Route path="/buatakun3" element={<Buatakun3 />} />
        <Route path="/galeripanti" element={<Galeripanti />} />
        <Route path="/transaksi2" element={<Transaksi2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pengajuanpenggalangan" element={<Pengajuanpenggalangan />} />
        <Route path="/pengajuanpencairan" element={<Pengajuanpencairan />} />
        <Route path="/detailyayasan" element={<Detailyayasan />} />
        <Route path="/homepanti" element={<Homepanti />} />
        <Route path="/logout" element={<LogoutPopup />} />
        <Route path="/sudahpenggalangan" element={<Sudahpenggalangan />} />
        <Route path="/detaildonasi" element={<Detaildonasi />} />
        <Route path="/loginadmin" element={<Loginadmin />} />
        <Route path="/homeadmin" element={<Homeadmin />} />
        <Route path="/transaksi1" element={<Transaksi1 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notif" element={<Notif />} />
        <Route path="/admindashboard" element={<Admin />} />
        <Route path="/adminlembaga" element={<AdminLembaga />} />
        <Route path="/pusatbantuanadmin" element={<Pusatbantuanadmin />} />
        <Route path="/dataadmin" element={<Admindata />} />
        <Route path="/notifpage" element={<Notifpage />} />
        <Route path="/transaksipage" element={<Transaksipage />} />
        <Route path="/konfirmasidonasi" element={<Konfirmasidonasi />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
