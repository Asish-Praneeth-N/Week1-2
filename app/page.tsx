"use client"

import { SlideNav } from "@/components/presentation/slide-nav"
import {
  AgendaSlide,
  BrowserMachineSlide,
  HtmlTreeSlide,
  CssTreeSlide,
  PerformanceProblemSlide,
  WhyReactSlide,
  ComponentsAreFunctionsSlide,
  ComponentHierarchySlide,
  OneWayDataFlowSlide,
  PropsVsStateSlide,
  StatePlacementSlide,
  ChildParentCommSlide,
  EventsTriggerStateSlide,
  VirtualDomSlide,
  FrontendBackendSlide,
  ApisJsonSlide,
  AsyncAwaitSlide,
  AuthFlowSlide,
  RolesAuthSlide,
  RlsSecuritySlide,
  PaginationStorageSlide,
  FinalMentalModelSlide,
} from "@/components/presentation/slides"

export default function Page() {
  return (
    <main className="relative">
      <SlideNav />
      <AgendaSlide />
      <BrowserMachineSlide />
      <HtmlTreeSlide />
      <CssTreeSlide />
      <PerformanceProblemSlide />
      <WhyReactSlide />
      <ComponentsAreFunctionsSlide />
      <ComponentHierarchySlide />
      <OneWayDataFlowSlide />
      <PropsVsStateSlide />
      <StatePlacementSlide />
      <ChildParentCommSlide />
      <EventsTriggerStateSlide />
      <VirtualDomSlide />
      <FrontendBackendSlide />
      <ApisJsonSlide />
      <AsyncAwaitSlide />
      <AuthFlowSlide />
      <RolesAuthSlide />
      <RlsSecuritySlide />
      <PaginationStorageSlide />
      <FinalMentalModelSlide />
    </main>
  )
}
