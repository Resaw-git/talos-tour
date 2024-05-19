import styles from "./app.module.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Home } from "../pages/home/home";
import { useAppSelector } from "../../redux/hooks";
import { Modal } from "../modal/modal";
import { Burger } from "../burger/burger";
import { Routes, Route, Outlet } from "react-router-dom";
import { Tourist } from "../pages/tourist/tourist";

export const App = () => {
  const { modal, burger } = useAppSelector((state) => state.modal);

  const Layout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tourist" element={<Tourist />} />
        </Route>
      </Routes>
      {modal && <Modal />}
      {burger && <Burger />}
    </div>
  );
};
