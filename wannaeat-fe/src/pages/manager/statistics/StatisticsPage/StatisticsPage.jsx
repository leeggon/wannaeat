import { useEffect } from 'react';
import useHeaderStore from 'stores/common/useHeaderStore.js';
import {
  StatisticsStyled,
  StatisticsDonutWrapperStyled,
  StatisticsHeaderStyled,
  TitleStyled,
  GoToDetailStyled,
  DonutWrapperStyled,
  DonutWithLabelStyled,
  StatisticsColumnWrapperStyled,
} from './StatisticsPage.js';
import WEDonut from 'component/manager/statistics/WEDonut/WEDonut.jsx';
import WEColumn from 'component/manager/statistics/WEColumn/WEColumn.jsx';

const StatisticsPage = () => {
  const {
    setIsCarrot,
    setIsShowBackIcon,
    setActiveIcons,
    setPageName,
    setIsUnderLine,
  } = useHeaderStore();

  useEffect(() => {
    setIsCarrot(false);
    setIsShowBackIcon(true);
    setActiveIcons([0]);
    setIsUnderLine(true);
    setPageName('매장 통계');
  }, [
    setIsCarrot,
    setIsShowBackIcon,
    setActiveIcons,
    setPageName,
    setIsUnderLine,
  ]);

  return (
    <StatisticsStyled>
      <StatisticsDonutWrapperStyled>
        <StatisticsHeaderStyled>
          <TitleStyled>피크타임 분석</TitleStyled>
          <GoToDetailStyled>더보기 {'>'}</GoToDetailStyled>
        </StatisticsHeaderStyled>
        <DonutWrapperStyled>
          <DonutWithLabelStyled>
            <WEDonut />
            <label>월</label>
          </DonutWithLabelStyled>
          <DonutWithLabelStyled>
            <WEDonut />
            <label>요일</label>
          </DonutWithLabelStyled>
          <DonutWithLabelStyled>
            <WEDonut />
            <label>시간</label>
          </DonutWithLabelStyled>
        </DonutWrapperStyled>
      </StatisticsDonutWrapperStyled>
      <StatisticsColumnWrapperStyled>
        <StatisticsHeaderStyled>
          <TitleStyled>일 매출 현황</TitleStyled>
          <GoToDetailStyled>더보기 {'>'}</GoToDetailStyled>
        </StatisticsHeaderStyled>
        <WEColumn />
      </StatisticsColumnWrapperStyled>
      <StatisticsDonutWrapperStyled>
        <StatisticsHeaderStyled>
          <TitleStyled>인기 메뉴</TitleStyled>
          <GoToDetailStyled>더보기 {'>'}</GoToDetailStyled>
        </StatisticsHeaderStyled>
        <DonutWrapperStyled></DonutWrapperStyled>
      </StatisticsDonutWrapperStyled>
      <StatisticsDonutWrapperStyled>
        <StatisticsHeaderStyled>
          <TitleStyled>인기 좌석</TitleStyled>
        </StatisticsHeaderStyled>
        <DonutWrapperStyled></DonutWrapperStyled>
      </StatisticsDonutWrapperStyled>
    </StatisticsStyled>
  );
};

export default StatisticsPage;
