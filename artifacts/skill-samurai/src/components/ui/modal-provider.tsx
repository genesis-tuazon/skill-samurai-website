"use client";

import dynamic from "next/dynamic";

const CalendarModal = dynamic(
  () => import("./calendar-modal").then((m) => m.CalendarModal),
  { ssr: false }
);
const BookingModal = dynamic(
  () => import("./booking-modal").then((m) => m.BookingModal),
  { ssr: false }
);
const MakeupModal = dynamic(
  () => import("./makeup-modal").then((m) => m.MakeupModal),
  { ssr: false }
);

export function ModalProvider() {
  return (
    <>
      <CalendarModal />
      <BookingModal />
      <MakeupModal />
    </>
  );
}
