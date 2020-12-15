import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['즐겨찾기']
  },
    {
      _tag: 'CSidebarNavItem',
      name: '메인 페이지',
      to: '/dashboard',
      icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
      // badge: {
      //   color: 'info',
      //   text: 'NEW',
      // }
    },


  {
    _tag: 'CSidebarNavTitle',
    _children: ['국내']
  },
    {
      _tag: 'CSidebarNavItem',
      name: '국내 코로나 실황',
      to: '/buttons/button-groups',
      icon: 'cil-puzzle'
    },

    {
      _tag: 'CSidebarNavItem',
      name: '확진자 이동경로 ',
      to: '/buttons/brand-buttons',
      icon: 'cil-location-pin',
    },
    {
      _tag: 'CSidebarNavItem',
      name: '실시간 재난문자 ',
      to: '/buttons/buttons',
      icon: 'cil-bell',
    },
      

  {
    _tag: 'CSidebarNavTitle',
    _children: ['세계']
  },
    {
      _tag: 'CSidebarNavItem',
      name: '세계 전체 데이터',
      to: '/base/tables',
      icon: 'cil-globe-alt',
    },
    {
      _tag: 'CSidebarNavItem',
      name: '국가별 데이터 비교해보기',
      to: '/charts',
      icon: 'cil-globe-alt',
    },



  {
    _tag: 'CSidebarNavTitle',
    _children: ['서비스']
  },
    {
      _tag: 'CSidebarNavItem',
      name: '확진자 발생까지 거리 ',
      to: '/base/breadcrumbs',
      icon: 'cil-puzzle',
    },
    {
      _tag: 'CSidebarNavItem',
      name: '코로나 안전도 보기 ',
      to: '/base/cards',
      icon: 'cil-magnifying-glass',
    },
    {
      _tag: 'CSidebarNavItem',
      name: '내 주위 재난문자 모아보기 ',
      to: '/base/carousels',
      icon: 'cil-bell',
    },
]

