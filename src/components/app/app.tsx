import styles from "./app.module.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Home } from "../../pages/home/home";
import { useAppSelector } from "../../redux/hooks";
import { Modal } from "../modal/modal";
import { Burger } from "../burger/burger";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Tourist } from "../../pages/tourist/tourist";
import { Seasons } from "../../pages/seasons/seasons";

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
          <Route path="seasons" element={<Navigate to="/spring" replace />} />
          <Route path="spring" element={<Seasons season="spring" />} />
          <Route path="summer" element={<Seasons season="summer" />} />
          <Route path="fall" element={<Seasons season="fall" />} />
          <Route path="winter" element={<Seasons season="winter" />} />
        </Route>
      </Routes>
      {modal && <Modal />}
      {burger && <Burger />}
    </div>
  );
};
