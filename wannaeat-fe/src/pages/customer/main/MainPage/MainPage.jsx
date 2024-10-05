import { useEffect, useState } from 'react';
import useHeaderStore from '../../../../stores/common/useHeaderStore.js';
import moment from 'moment/moment.js';
import {
  MainPageContainer,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  BannerWrapper,
  BannerImage,
  BannerRightWrapper,
  BannerTitle,
  BannerButton,
  CategoryWrapper,
  CategoryTitle,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  RestaurantWrapper,
  RestaurantHeader,
  RestaurantInfoContainer,
  RestaurantTitle,
  RestaurantTitleButton,
  RestaurantInfoBox,
  RestaurantInfoImage,
  RestaurantInfoName,
  RestaurantDetailWrapper,
  RestaurantMyReservation,
  RestaurantTotalReservation,
} from './MainPage.js';
import searchIcon from '../../../../assets/icons/common/search.svg';
import tableIcon from '../../../../assets/icons/common/table.svg';
import arrowRightIcon from '../../../../assets/icons/common/arrow-right.svg';
import blackArrowRightIcon from '../../../../assets/icons/common/black-arrow-right.svg';
import { useNavigate } from 'react-router-dom';
import useMapFilterStore from 'stores/map/useMapFilterStore.js';
import { getMyReservation } from 'api/customer/reservation.js';
const MainPage = () => {
  const { setKeyword } = useMapFilterStore();
  const { setIsShowLogo, setActiveIcons, setPageName } = useHeaderStore();
  const navigate = useNavigate();
  const [restaurantCategories, setRestaurantCategories] = useState([]);
  const [recentlyReservedRestaurants, setRecentlyReservedRestaurants] =
    useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchMyReservationList = async () => {
      const result = await getMyReservation();
      console.log(result);

      if (result.status === 200) {
        console.log('내 예약 정보 불러오기 성공');
        setRecentlyReservedRestaurants(result.data.content);
      } else {
        console.log('내 예약 정보 불러오기 실패');
      }
    };
    setPageName('');
    setIsShowLogo(true);
    setActiveIcons([0]);
    setRestaurantCategories(JSON.parse(localStorage.getItem('categories')));
    fetchMyReservationList();
  }, []);

  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  const handleSearchIconClick = () => {
    setKeyword(searchKeyword);
    navigate('/customer/reservation');
  };
  const handleClickCategoryItem = (category) => {
    setKeyword(category);
    navigate('/customer/reservation');
  };
  const handleReservationButtonClick = () => {
    navigate('/customer/reservation');
  };

  const handleReservationListButtonClick = () => {
    navigate('/customer/reservationlist');
  };

  return (
    <MainPageContainer>
      <SearchWrapper>
        <SearchInput
          value={searchKeyword}
          onChange={handleSearchKeywordChange}
          placeholder="메뉴, 식당, 지역 검색"
        />
        <SearchIcon
          onClick={handleSearchIconClick}
          src={searchIcon}
        ></SearchIcon>
      </SearchWrapper>
      <BannerWrapper>
        <BannerImage src={tableIcon} />
        <BannerRightWrapper>
          <BannerTitle>
            예약을 통해
            <br />
            완벽한 식사 시간을
            <br />
            만들어보세요
          </BannerTitle>
          <BannerButton onClick={handleReservationButtonClick}>
            예약하러 가기
            <img src={arrowRightIcon} />
          </BannerButton>
        </BannerRightWrapper>
      </BannerWrapper>
      <CategoryWrapper>
        <CategoryTitle>무엇을 드시고 싶으세요?</CategoryTitle>
        <CategoryContainer>
          {restaurantCategories.map((category) => (
            <div
              key={category.restaurantCategoryId}
              onClick={() =>
                handleClickCategoryItem(category.restaurantCategoryName)
              }
            >
              <CategoryImage src={category.restaurantCategoryImage} />
              <CategoryName>{category.restaurantCategoryName}</CategoryName>
            </div>
          ))}
        </CategoryContainer>
      </CategoryWrapper>
      <RestaurantWrapper>
        <RestaurantHeader>
          <RestaurantTitle>최근 예약한 식당</RestaurantTitle>
          <RestaurantTitleButton onClick={handleReservationListButtonClick}>
            예약내역 보기
            <img src={blackArrowRightIcon} />
          </RestaurantTitleButton>
        </RestaurantHeader>
        <RestaurantInfoContainer>
          {recentlyReservedRestaurants.map((restaurant) => (
            <RestaurantInfoBox key={restaurant.index}>
              <RestaurantInfoImage src={restaurant.restaurantImage} />
              <RestaurantInfoName>
                {restaurant.restaurantName}
              </RestaurantInfoName>
              <RestaurantDetailWrapper>
                <RestaurantMyReservation>
                  {restaurant.reservationDate}
                </RestaurantMyReservation>
                <RestaurantMyReservation>
                  {restaurant.reservationStartTime.split(':')[0] +
                    ':' +
                    restaurant.reservationEndTime.split(':')[1]}
                </RestaurantMyReservation>
                <RestaurantMyReservation>
                  {restaurant.memberCnt}명
                </RestaurantMyReservation>
              </RestaurantDetailWrapper>
            </RestaurantInfoBox>
          ))}
        </RestaurantInfoContainer>
      </RestaurantWrapper>
    </MainPageContainer>
  );
};

export default MainPage;
