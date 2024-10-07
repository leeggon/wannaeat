import { useEffect, useState } from 'react';
import useHeaderStore from 'stores/common/useHeaderStore.js';
import useTextfieldStore from 'stores/common/useTextfieldStore.js';
// import useDropdownStore from 'stores/common/useDropdownStore.js';
import validateName from 'utils/manager/restaurantRegistValidation.js';
import {
  RestaurantRegistPageStyled,
  TabWithButtonStyled,
  TabWrapperStyled,
  ContentWrapperStyled,
  DropdownWrapperStyled,
  InputWithLabelStyled,
  InputWrapperStyled,
} from './RestaurantRegistPage.js';
import useMyRestaurantStore from 'stores/manager/useMyRestaurantStore.js';
import WETextField from 'component/common/textfield/WETextfield/WETextfield.jsx';
import WETab from 'component/common/tab/WETab/WETab.jsx';
import WEButton from 'component/common/button/WEButton/WEButton.jsx';
// import WETimeDropdown from 'component/manager/WETimeDropdown.jsx';
import MapModal from 'component/manager/map/MapModal.jsx';
import { registRestaurant } from 'api/manager/restaurant/restaurant.js';
import WEDropdown from '../../../../component/common/dropdown/WEDropdown.jsx';
import useMapFilterStore from 'stores/map/useMapFilterStore.js';
import {
  useDropdownStore,
  useVisitTimeDropdownStore,
  useEndTimeDropdownStore,
  useBreakStartTimeDropdownStore,
  useBreakEndTimeDropdownStore,
} from '../../../../stores/common/useDropdownStore.js';
import useAlert from 'utils/alert.js';
import useReservationStore from '../../../../stores/customer/useReservationStore.js';

const RestaurantRegistPage = () => {
  const tabs = ['사업자', '매장'];
  const { setIsCarrot, setPageName, setIsUnderLine } = useHeaderStore();
  const { managerFormData, setManagerFormData, restaurantId, setRestaurantId } =
    useMyRestaurantStore();
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const { setCategoryId } = useMapFilterStore();
  const { setItems } = useDropdownStore();
  const { setError, clearError } = useTextfieldStore();
  const { lunchTimes, dinnerTimes } = useReservationStore();

  const { setItems: setVisitTimeItems } = useVisitTimeDropdownStore();
  const { setItems: setEndTimeItems } = useEndTimeDropdownStore();
  const { setItems: setBreakStartTimeItems } = useBreakStartTimeDropdownStore();
  const { setItems: setBreakEndTimeItems } = useBreakEndTimeDropdownStore();

  const showAlert = useAlert();
  const allTimes = [...lunchTimes, ...dinnerTimes];

  const [restaurantFormData, setRestaurantFormData] = useState({
    restaurantOpenTime: '',
    restaurantCloseTime: '',
    breakStartTime: '',
    breakEndTime: '',
    maxReservationTime: '',
    minMemberCount: '',
    maxMemberCount: '',
    depositPerMember: '',
    restaurantDescription: '',
    restaurantImages: [],
  });

  const handleAddressClick = () => {
    setIsMapModalOpen(true);
  };

  const handleMapConfirm = (latitude, longitude, address) => {
    console.log('주소 잘왔나', address);
    setManagerFormData('lat', latitude);
    setManagerFormData('lng', longitude);
    setManagerFormData('address', address);
  };
  console.log('사업자 정보', managerFormData);
  console.log('레스토랑 정보', restaurantFormData);

  // 확인 버튼을 누르면 호출되는 함수
  const handleRegistButtonClick = async () => {
    const response = await registRestaurant({
      restaurantOwnerName: managerFormData.name,
      restaurantBusinessNumber: managerFormData.number,
      restaurantAddress: managerFormData.address,
      restaurantPhone: managerFormData.phone,
      restaurantName: managerFormData.restaurantName,
      restaurantCategoryId: managerFormData.businessType,
      latitude: managerFormData.lat,
      longitude: managerFormData.lng,
    });
    console.log(response);
    if (response.status === 201) {
      const restaurantId = response.data.data;
      // 매장 등록 시 로컬스토리지에 restaurantId 저장
      window.localStorage.setItem('restaurantId', restaurantId);
      setActiveTab(1);
      showAlert(response.data.message);
    } else if (response.status === 400) {
      showAlert('값을 형식에 맞게 입력하세요.');
    } else {
      showAlert(response.response.data.message);
    }
  };

  // 카테고리가 선택되면 호출되는 함수
  const handleCategoryOnSelect = (e) => {
    const categories = JSON.parse(localStorage.getItem('categories'));
    const categoryId = categories.filter(
      (category) => category.restaurantCategoryName === e
    )[0].restaurantCategoryId;
    console.log(categoryId);
    setManagerFormData('businessType', categoryId);
  };

  useEffect(() => {
    setIsCarrot(false);
    setIsUnderLine(true);
    setPageName('매장 정보 입력');
  }, []);

  useEffect(() => {
    if (restaurantId) {
      setActiveTab(1);
    }
    setItems(
      JSON.parse(localStorage.getItem('categories')).map(
        (category) => category.restaurantCategoryName
      )
    );
  }, []);

  useEffect(() => {
    if (activeTab === 1) {
      setVisitTimeItems(allTimes);
      setEndTimeItems(allTimes);
      setBreakStartTimeItems(allTimes);
      setBreakEndTimeItems(allTimes);
    }
  }, [activeTab]);

  const renderContent = (activeTab) => {
    switch (activeTab) {
      case 0:
        return (
          <ContentWrapperStyled>
            <InputWrapperStyled>
              <InputWithLabelStyled>
                <label>대표자</label>
                <WETextField
                  name="restaurantRegist-name"
                  placeholder="대표자 이름을 입력하세요."
                  value={managerFormData.name}
                  showErrorMessageSpace={true}
                  onChange={(e) => setManagerFormData('name', e.target.value)}
                />
              </InputWithLabelStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                <label>사업장 주소</label>
                <WETextField
                  name="restaurantRegist-address"
                  placeholder="사업장 주소를 입력하세요."
                  value={managerFormData.address}
                  showErrorMessageSpace={true}
                  onChange={(e) =>
                    setManagerFormData('address', e.target.value)
                  }
                  onClick={handleAddressClick}
                />
                <MapModal
                  isOpen={isMapModalOpen}
                  onClose={() => setIsMapModalOpen(false)}
                  onConfirm={handleMapConfirm}
                />
              </InputWithLabelStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                <label>사업자등록번호</label>
                <WETextField
                  name="restaurantRegist-Number"
                  placeholder="xxx-xx-xxxxx"
                  value={managerFormData.number}
                  showErrorMessageSpace={true}
                  onChange={(e) => setManagerFormData('number', e.target.value)}
                />
              </InputWithLabelStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                <label>전화번호</label>
                <WETextField
                  name="restaurantRegist-phone"
                  placeholder="00000000000"
                  value={managerFormData.phone}
                  showErrorMessageSpace={true}
                  onChange={(e) => setManagerFormData('phone', e.target.value)}
                />
              </InputWithLabelStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                <label>매장명</label>
                <WETextField
                  name="restaurantRegist-restaurantName"
                  placeholder="매장명을 입력하세요."
                  value={managerFormData.restaurantName}
                  showErrorMessageSpace={true}
                  onChange={(e) =>
                    setManagerFormData('restaurantName', e.target.value)
                  }
                />
              </InputWithLabelStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                <label>업종</label>
                <WEDropdown
                  useDropdownStore={useDropdownStore}
                  placeholder="카테고리를 선택하세요"
                  onSelect={handleCategoryOnSelect}
                />
              </InputWithLabelStyled>
            </InputWrapperStyled>
          </ContentWrapperStyled>
        );
      case 1:
        return (
          <ContentWrapperStyled>
            <InputWrapperStyled>
              <label>영업시간</label>
              <DropdownWrapperStyled>
                {/* <InputWithLabelStyled> */}
                <WEDropdown
                  useDropdownStore={useVisitTimeDropdownStore}
                  placeholder="시작시간"
                  value={restaurantFormData.restaurantOpenTime}
                  onSelect={(value) =>
                    setRestaurantFormData((prevData) => ({
                      ...prevData,
                      restaurantOpenTime: value,
                    }))
                  }
                />
                {/* </InputWithLabelStyled> */}
                {/* <InputWithLabelStyled> */}

                <WEDropdown
                  useDropdownStore={useEndTimeDropdownStore}
                  placeholder="끝나는시간"
                  value={restaurantFormData.restaurantCloseTime}
                  onSelect={(value) =>
                    setRestaurantFormData((prevData) => ({
                      ...prevData,
                      restaurantCloseTime: value,
                    }))
                  }
                />
                {/* </InputWithLabelStyled> */}
              </DropdownWrapperStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                {/* <label>사업장 주소</label>
                <WETextField
                  name="restaurantRegist-address"
                  placeholder="사업장 주소를 입력하세요."
                  value={managerFormData.address}
                  showErrorMessageSpace={true}
                  onChange={(e) => setRestaurantFormData(e.target.value)}
                /> */}
              </InputWithLabelStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                {/* <label>전화번호</label>
                <WETextField
                  name="restaurantRegist-phone"
                  placeholder="전화번호를 입력하세요."
                  value={managerFormData.phone}
                  showErrorMessageSpace={true}
                  onChange={(e) => setRestaurantFormData(e.target.value)}
                /> */}
              </InputWithLabelStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                {/* <label>매장명</label>
                <WETextField
                  name="restaurantRegist-restaurantName"
                  placeholder="매장명을 입력하세요."
                  value={managerFormData.restaurantName}
                  showErrorMessageSpace={true}
                  onChange={(e) => setRestaurantFormData(e.target.value)}
                /> */}
              </InputWithLabelStyled>
            </InputWrapperStyled>

            <InputWrapperStyled>
              <InputWithLabelStyled>
                {/* <label>업종</label>
                <WETextField
                  name="restaurantRegist-businessType"
                  placeholder="업종을 입력하세요."
                  value={managerFormData.businessType}
                  showErrorMessageSpace={true}
                  onChange={(e) => setRestaurantFormData(e.target.value)}
                /> */}
              </InputWithLabelStyled>
            </InputWrapperStyled>
          </ContentWrapperStyled>
        );
      default:
        return null;
    }
  };

  return (
    <RestaurantRegistPageStyled>
      <TabWithButtonStyled>
        <TabWrapperStyled>
          <WETab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={(index) => {
              if (!restaurantId || index !== 0) {
                setActiveTab(index);
              }
            }}
          />
        </TabWrapperStyled>
        <WEButton className="testButton" size={'menu'}>
          메뉴
        </WEButton>
      </TabWithButtonStyled>

      <ContentWrapperStyled>{renderContent(activeTab)}</ContentWrapperStyled>

      <WEButton
        className="testButton"
        onClick={handleRegistButtonClick}
        size={'long'}
      >
        확인
      </WEButton>
    </RestaurantRegistPageStyled>
  );
};

export default RestaurantRegistPage;
