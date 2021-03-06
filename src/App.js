import logo from './logo.svg';
import './App.css';
import Databinding from './DataBinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Rendering_Conditions from './Rendering_Conditions/Rendering_Conditions';
import Ex1StateDemo from './StateDemo/Ex1StateDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import QuanLyDanhSachPhim from './RenderWithMap/QuanLyDanhSachPhim';
import BaiTapXemChiTietSP from './Props/BaiTapXemChiTietSP/BaiTapXemChiTietSP';
import BaiTapGioHangRedux from './DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapThuKinh from './BaiTap/BaiTapThuKinh/BaiTapThuKinh';

function App() {
  return (
    <div className="App">
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <Rendering_Conditions /> */}
      {/* <Ex1StateDemo /> */}
      {/* <RenderWithMap /> */}
      {/* <QuanLyDanhSachPhim /> */}
      {/* <BaiTapXemChiTietSP /> */}
      {/* <BaiTapGioHangRedux /> */}
      <BaiTapThuKinh />
    </div>
  );
}

export default App;
