import styled from '@emotion/styled/macro';
import WETabbar from './layout/common/WETabbar/WETabbar';
import TopPage from './pages/TopPage/TopPage.jsx';
import useModalStore from './stores/common/modal/useModalStore.js';
import WEBlackOutLayout from './layout/common/WEBlackOutLayout/WEBlackOutLayout.jsx';
import WEModal from './component/common/modal/WEModal.jsx';
import AppRoutes from './route/routes.js';
import TimeSelectPage from './pages/customer/reservation/process/TimeSelectPage/TimeSelectPage.jsx';
const Main = () => {
  const { isModalVisible } = useModalStore();

  const AppContainer = styled.div`
    display: flex;
    flex-direction: column; /* 세로 방향 정렬 */
    justify-content: center; /* 수직 가운데 정렬 */
    align-items: center; /* 수평 가운데 정렬 */
    height: 100vh; /* 뷰포트 전체 높이를 채움 */

    @media (min-width: 480px) {
      > * {
        justify-content: center;
      }
    }
  `;

  return (
    <div>
      {isModalVisible && <WEBlackOutLayout></WEBlackOutLayout>}
      {isModalVisible && <WEModal />}
      <AppContainer>
        <AppRoutes />
        <WETabbar />
      </AppContainer>
    </div>
  );
};

export default Main;
