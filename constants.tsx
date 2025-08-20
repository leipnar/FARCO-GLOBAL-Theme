import React from 'react';
import type { Ship, Service, NewsArticle } from './types';

// =================================================================================
// ICONS (Font Awesome - Free)
// =================================================================================
export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

// --- Primary Service Icons ---
const TruckIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 640 512" fill="currentColor"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM160 464a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm384 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
);
const AnchorIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 352a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-32-104c0-29.9 20.9-55.3 49.3-62.2c2.4-25.5 24.3-45.8 49.9-45.8s47.5 20.3 49.9 45.8c28.4 6.9 49.3 32.3 49.3 62.2v16c0 17.7-14.3 32-32 32H184c-17.7 0-32-14.3-32-32v-16z"/></svg>
);
const UsersIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 640 512" fill="currentColor"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24s-24-10.7-24-24zM448 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-160a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/></svg>
);
const ShieldIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
);
const WarehouseIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 576 512" fill="currentColor"><path d="M572.7 223.3c-2.6-7.8-8.8-13.9-16.7-16.7L494.4 192H448V64c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64v128H81.6l-61.6 14.6c-7.8 2.6-13.9 8.8-16.7 16.7L0 272v160c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V272l-3.3-48.7zM256 256H160V128h96v128zm160 0H320V128h96v128z"/></svg>
);
const BoxesStackedIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor"><path d="M48 24C21.5 24 0 45.5 0 72V320c0 26.5 21.5 48 48 48H224V256c0-17.7 14.3-32 32-32s32 14.3 32 32V368H464c26.5 0 48-21.5 48-48V72c0-26.5-21.5-48-48-48H48zM288 368V440c0 13.3-10.7 24-24 24s-24-10.7-24-24V368h48z"/></svg>
);
const GearsIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-15.7 20.2-28.1 20.2h-86.2c-3.2-11.8-7.7-22.9-13.4-33.3l43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 15.7-20.2 28.1-20.2h86.2c3.2 11.8 7.7 22.9 13.4 33.3l-43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-15.7 20.2-28.1 20.2h-86.2c-3.2-11.8-7.7-22.9-13.4-33.3l43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 15.7-20.2 28.1-20.2h-86.2v-86.2H384c12.4 0 23.7-8.3 28.1-20.2c3.2-8.7 .5-18.4-6.4-24.6l-43.3-39.4c5.7-10.5 10.2-21.5 13.4-33.3h86.2c12.4 0 23.7 8.3 28.1 20.2zM320 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM192 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm192 64a64 64 0 1 0 0 128 64 64 0 1 0 0-128z"/></svg>
);
const GasPumpIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor"><path d="M104 56c0-26.5 21.5-48 48-48H360c26.5 0 48 21.5 48 48V200H104V56zm0 176H408v24c0 53-43 96-96 96h-8c-14.7 0-28.5-3.4-40.6-9.4c-11.8 5.9-25.1 8.9-38.9 9.3c-3.1 .1-6.2 0-9.2-.2c-13.9-.9-27.5-3.3-40.2-7.3C155.8 384.8 135 364.5 123.4 343L104 309.8V232zM48 448c-17.7 0-32-14.3-32-32s14.3-32 32-32H464c17.7 0 32 14.3 32 32s-14.3 32-32 32H48zM312 232v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V232h48z"/></svg>
);
const ShipIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor"><path d="M32 96l320 0V32c0-17.7-14.3-32-32-32H64C46.3 0 32 14.3 32 32V96zM32 128V320c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128H32zM320 96H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352V96h-32zM480 320c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V320h128zM32 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32z"/></svg>
);

// --- Why Choose Us Icons ---
export const GlobeIcon: React.FC<{ className?: string }> = ({ className = "h-12 w-12 text-farco-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.1-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.1 20.4 3.3 41.8 3.3 64zM256 480c48.6 0 93.3-14 130.5-37.8c-2.1-1.3-4.2-2.7-6.3-4.2c-21-14.6-53.4-23-96.2-23s-75.2 8.4-96.2 23c-2.1 1.5-4.2 2.9-6.3 4.2C162.7 466 207.4 480 256 480zM512 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248zM40 256c0 22.2 1.2 43.6 3.3 64h86.2c-2.1-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H43.3c-2.1 20.4-3.3 41.8-3.3 64zM256 32c-48.6 0-93.3 14-130.5 37.8c2.1 1.3 4.2 2.7 6.3 4.2c21 14.6 53.4 23 96.2 23s75.2-8.4 96.2-23c2.1-1.5 4.2-2.9 6.3-4.2C349.3 46 304.6 32 256 32zM468.7 192h-86.2c2.1 20.4 3.3 41.8 3.3 64s-1.2 43.6-3.3 64h86.2c2.1-20.4 3.3-41.8 3.3-64s-1.2-43.6-3.3-64z"/></svg>
);
export const HeadsetIcon: React.FC<{ className?: string }> = ({ className = "h-12 w-12 text-farco-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
);
export const UserTieIcon: React.FC<{ className?: string }> = ({ className = "h-12 w-12 text-farco-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 448 512" fill="currentColor"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
);
export const LeafIcon: React.FC<{ className?: string }> = ({ className = "h-12 w-12 text-farco-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 576 512" fill="currentColor"><path d="M576 64a64 64 0 0 0-64-64H64A64 64 0 0 0 0 64V352a64 64 0 0 0 64 64H240.2c4.5 29.1 29.2 50.3 58.5 51.9l-2.4 7.1c-1.1 3.3 .2 7.1 3.5 8.2s7.1-.2 8.2-3.5l8.1-24.3c2.5 1.5 5.2 2.7 8.1 3.5l-2.4 7.1c-1.1 3.3 .2 7.1 3.5 8.2s7.1-.2 8.2-3.5l8.1-24.3c2.5 1.5 5.2 2.7 8.1 3.5l-2.4 7.1c-1.1 3.3 .2 7.1 3.5 8.2s7.1-.2 8.2-3.5l8.1-24.3c2.5 1.5 5.2 2.7 8.1 3.5l-2.4 7.1c-1.1 3.3 .2 7.1 3.5 8.2s7.1-.2 8.2-3.5l8.1-24.3c29.3-1.6 54-22.8 58.5-51.9H512a64 64 0 0 0 64-64V64zM288 320a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"/></svg>
);

// --- Service Detail Icons (FA Solid) ---
const WaterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 384 512" fill="currentColor"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.2 35.8 80 80 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-26.5 0-48-21.5-48-48z"/></svg>;
const PlaneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor"><path d="M496 160c0-35.3-28.7-64-64-64H320V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H176c-17.7 0-32 14.3-32 32v32h-16c-35.3 0-64 28.7-64 64v32h16v32c0 17.7 14.3 32 32 32h80v64c0 17.7 14.3 32 32 32s32-14.3 32-32V384h128c35.3 0 64-28.7 64-64V256h16c17.7 0 32-14.3 32-32V192h-16V160z"/></svg>;
const RoadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor"><path d="M464 64C490.5 64 512 85.49 512 112V400C512 426.5 490.5 448 464 448H48C21.49 448 0 426.5 0 400V112C0 85.49 21.49 64 48 64H464zM224 224V160H288V224H224zM224 352V288H288V352H224zM128 224V160H160V224H128zM128 352V288H160V352H128zM352 224V160H384V224H352zM352 352V288H384V352H352z"/></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-farco-sky-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SackDollarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 352c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm80-144c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z"/></svg>;
const BoxesPackingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor"><path d="M208 0c-26.5 0-48 21.5-48 48V96H48c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H352V48c0-26.5-21.5-48-48-48H208zM64 160H448V448H64V160zm160-32V64h64v64H224z"/></svg>;

// --- About Page Icons ---
export const HandshakeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-farco-sky-blue" viewBox="0 0 640 512" fill="currentColor"><path d="M480 288c0-5.5-2-10.7-5.5-14.5L340.5 159c-9.4-10.1-24.6-10.1-34 0L171.5 273.5c-3.5 3.8-5.5 9-5.5 14.5c0 13.3 10.7 24 24 24H224v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V312h32c13.3 0 24-10.7 24-24zm0 0c0-5.5-2-10.7-5.5-14.5L340.5 159c-9.4-10.1-24.6-10.1-34 0L171.5 273.5c-3.5 3.8-5.5 9-5.5 14.5c0 13.3 10.7 24 24 24H224v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V312h32c13.3 0 24-10.7 24-24zm-320-96c0 5.5 2 10.7 5.5 14.5L299.5 321c9.4 10.1 24.6 10.1 34 0l134-144.5c3.5-3.8 5.5-9 5.5-14.5c0-13.3-10.7-24-24-24H384V32c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v136H184c-13.3 0-24 10.7-24 24z"/></svg>;
export const AwardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-farco-sky-blue" viewBox="0 0 384 512" fill="currentColor"><path d="M336 0c-26.5 0-48 21.5-48 48V224H96V48c0-26.5-21.5-48-48-48S0 21.5 0 48V464c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 344a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/></svg>;
export const UsersGearIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-farco-sky-blue" viewBox="0 0 640 512" fill="currentColor"><path d="M128 32a128 128 0 1 1-256 0A128 128 0 1 1 128 32zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-15.7 20.2-28.1 20.2h-86.2c-3.2-11.8-7.7-22.9-13.4-33.3l43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 15.7-20.2 28.1-20.2h86.2c3.2 11.8 7.7 22.9 13.4 33.3l-43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-15.7 20.2-28.1 20.2h-86.2c-3.2-11.8-7.7-22.9-13.4-33.3l43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 15.7-20.2 28.1-20.2h-86.2v-86.2H512c12.4 0 23.7-8.3 28.1-20.2c3.2-8.7 .5-18.4-6.4-24.6l-43.3-39.4c5.7-10.5 10.2-21.5 13.4-33.3h86.2c12.4 0 23.7 8.3 28.1 20.2zM576 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>;
export const LightbulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-farco-sky-blue" viewBox="0 0 320 512" fill="currentColor"><path d="M160 0C71.6 0 0 71.6 0 160c0 48.4 21.3 92.1 55.1 121.2c-2.4 6.3-4.1 13-4.8 19.8C30.8 307.3 0 338.5 0 376c0 41.2 31.1 75.7 71.5 79.8c11.3 1.2 22.8 1.8 34.5 1.8c42.8 0 82.2-14.8 112-40c2.8-2.3 5.4-4.8 7.9-7.3c25.2-25.2 40.1-59.5 40.1-96.5c0-41.2-31.1-75.7-71.5-79.8c-11.3-1.2-22.8-1.8-34.5-1.8c-42.8 0-82.2 14.8-112 40c-2.8 2.3-5.4 4.8-7.9 7.3C60.8 385.2 48 368.5 48 352c0-26.4 21.6-48 48-48h128c26.4 0 48 21.6 48 48s-21.6 48-48 48h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c44.2 0 80-35.8 80-80c0-48.4-21.3-92.1-55.1-121.2c2.4-6.3 4.1-13 4.8-19.8C289.2 204.7 320 173.5 320 136c0-41.2-31.1-75.7-71.5-79.8C237.2 55 225.7 54.4 214 54.4c-42.8 0-82.2 14.8-112 40c-2.8 2.3-5.4 4.8-7.9 7.3C70.8 126.8 56 142.5 56 160c0 26.4 21.6 48 48 48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H104c-44.2 0-80-35.8-80-80C24 35.8 59.8 0 104 0h112z"/></svg>;
export const BullseyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-farco-sky-blue" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM256 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288zM192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z"/></svg>;
export const TrophyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-farco-sky-blue" viewBox="0 0 576 512" fill="currentColor"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM216 296c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm88-104c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm64 104c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"/></svg>;

// =================================================================================
// SERVICES
// =================================================================================

export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'freight-forwarding',
    title: 'Freight Forwarding',
    icon: <TruckIcon />,
    shortDescription: 'Reliable and efficient international sea, air, and land freight solutions.',
    pageContent: {
      heroImageSeed: 'freight-container-port',
      introduction: 'Our comprehensive freight forwarding services form the backbone of global supply chains. We meticulously manage the logistics of shipping goods from origin to destination, ensuring your cargo travels safely, on schedule, and within budget via the most efficient routes.',
      features: [
        { title: 'Ocean Freight', description: 'Full Container Load (FCL) and Less than Container Load (LCL) options to all major global ports.', icon: <WaterIcon /> },
        { title: 'Air Freight', description: 'Expedited and standard air cargo services for your most time-sensitive shipments.', icon: <PlaneIcon /> },
        { title: 'Land Transport', description: 'Integrated trucking and rail solutions providing seamless door-to-door connectivity.', icon: <RoadIcon /> },
        { title: 'Customs Expertise', description: 'Expert handling of all customs documentation and procedures to prevent costly delays.', icon: <ShieldIcon className="w-8 h-8"/> }
      ],
      process: [
        { step: 1, title: 'Consultation & Planning', description: 'We analyze your needs to devise the optimal shipping strategy, balancing cost, speed, and security.' },
        { step: 2, title: 'Booking & Documentation', description: 'We secure cargo space with our trusted carriers and meticulously handle all required paperwork.' },
        { step: 3, title: 'Shipment & Tracking', description: 'Your cargo is transported while you enjoy real-time tracking and complete visibility from start to finish.' },
        { step: 4, title: 'Final Delivery', description: 'We manage customs clearance and final-mile delivery, ensuring a smooth transition to the destination.' },
      ],
      benefits: [
        { title: 'Global Reach, Local Expertise', icon: <CheckCircleIcon /> },
        { title: 'Cost-Effective & Optimized Routes', icon: <CheckCircleIcon /> },
        { title: 'Single Point of Contact', icon: <CheckCircleIcon /> },
        { title: 'Regulatory Compliance & Peace of Mind', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '2',
    slug: 'charter-shipments',
    title: 'Charter Shipments',
    icon: <AnchorIcon />,
    shortDescription: 'Flexible vessel chartering for bulk, oversized, or project cargo.',
    pageContent: {
      heroImageSeed: 'heavy-lift-cargo-ship',
      introduction: 'For cargo that falls outside standard shipping dimensions or requires dedicated capacity, our vessel chartering services provide the ultimate flexibility. We source the perfect vessel for your unique requirements, managing every detail of the voyage for a bespoke transport solution.',
      features: [
        { title: 'Voyage & Time Charters', description: 'Flexible options tailored to your specific timeframe, cargo volume, and routing needs.', icon: <AnchorIcon className="w-8 h-8" /> },
        { title: 'Project Cargo', description: 'Specialized management for heavy-lift, oversized, and high-value industrial equipment.', icon: <SackDollarIcon /> },
        { title: 'Bulk Commodities', description: 'Efficient and reliable transport of grains, minerals, coal, and other raw materials.', icon: <BoxesPackingIcon /> },
        { title: 'Route Optimization', description: 'Advanced voyage planning to ensure the most efficient, safe, and cost-effective journey.', icon: <GlobeIcon className="w-8 h-8"/> }
      ],
      benefits: [
        { title: 'Unmatched Flexibility for Any Cargo', icon: <CheckCircleIcon /> },
        { title: 'Dedicated Capacity & Scheduling', icon: <CheckCircleIcon /> },
        { title: 'Expertise in Complex & Oversized Shipments', icon: <CheckCircleIcon /> },
        { title: 'End-to-End Voyage Management', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '3',
    slug: 'ship-brokerage',
    title: 'Ship Brokerage',
    icon: <UsersIcon />,
    shortDescription: 'Expert brokerage for the buying, selling, and chartering of commercial vessels.',
    pageContent: {
      heroImageSeed: 'maritime-business-deal',
      introduction: 'Leveraging deep market intelligence and a vast global network, our ship brokerage team acts as a vital intermediary in the maritime marketplace. We facilitate the sale, purchase, and chartering of all commercial vessel types with professionalism, discretion, and an unwavering focus on our clients\' best interests.',
      features: [
        { title: 'Sale & Purchase (S&P)', description: 'Connecting qualified buyers and sellers for all vessel types, from tankers to bulk carriers.', icon: <UsersIcon className="w-8 h-8" /> },
        { title: 'Newbuilding Contracts', description: 'Negotiating and supervising new vessel constructions at world-class shipyards.', icon: <ShipIcon className="w-8 h-8" /> },
        { title: 'Vessel Valuation', description: 'Providing accurate, data-driven market valuations for investment and financing purposes.', icon: <SackDollarIcon /> },
        { title: 'Demolition Sales', description: 'Managing the end-of-life sale of vessels for responsible and compliant recycling.', icon: <AnchorIcon className="w-8 h-8" /> }
      ],
      benefits: [
        { title: 'In-Depth Market Intelligence', icon: <CheckCircleIcon /> },
        { title: 'Extensive Global Network of Owners & Buyers', icon: <CheckCircleIcon /> },
        { title: 'Expert Negotiation & Contract Management', icon: <CheckCircleIcon /> },
        { title: 'Confidential and Secure Transactions', icon: <CheckCircleIcon /> },
      ]
    }
  },
   {
    id: '8',
    slug: 'gas-oil-logistics',
    title: 'Gas & Oil Logistics',
    icon: <GasPumpIcon />,
    shortDescription: 'Specialized, compliant logistics for the entire energy supply chain.',
    pageContent: {
      heroImageSeed: 'offshore-oil-rig-sunset',
      introduction: 'The energy sector demands precision, safety, and unwavering compliance. Our specialized Gas & Oil logistics services cater to the entire lifecycle, from upstream exploration and production support to downstream distribution of refined products. We provide robust, secure, and efficient supply chain solutions for one of the world\'s most critical industries.',
      features: [
        { title: 'Upstream Logistics', description: 'Support for exploration and production, including rig mobilization, pipeline transport, and supply base management.', icon: <AnchorIcon className="w-8 h-8" /> },
        { title: 'Downstream Distribution', description: 'Safe and reliable transportation of refined products via tankers, pipelines, and multimodal solutions.', icon: <RoadIcon /> },
        { title: 'Offshore Support', description: 'Comprehensive logistics for offshore platforms and vessels, including crew changes and critical equipment delivery.', icon: <WaterIcon /> },
        { title: 'Compliance & Safety', description: 'Strict adherence to HSSE standards and international regulations governing the transport of hazardous materials.', icon: <UserTieIcon className="w-8 h-8" /> }
      ],
      benefits: [
        { title: 'Uncompromising Safety & Compliance', icon: <CheckCircleIcon /> },
        { title: 'Integrated End-to-End Solutions', icon: <CheckCircleIcon /> },
        { title: 'Global Reach in Key Energy Hubs', icon: <CheckCircleIcon /> },
        { title: 'Resilient & Responsive Supply Chains', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '4',
    slug: 'customs-brokerage',
    title: 'Customs Brokerage',
    icon: <ShieldIcon />,
    shortDescription: 'Streamlining customs clearance to avoid delays and ensure compliance.',
    pageContent: {
      heroImageSeed: 'customs-inspection-port',
      introduction: 'Navigating the labyrinth of international trade regulations is a critical component of logistics. Our licensed customs brokers are experts in compliance, ensuring your shipments cross borders smoothly, avoid costly penalties, and adhere to all import and export laws in every jurisdiction.',
      features: [
        { title: 'Import/Export Documentation', description: 'Meticulous preparation and submission of all declarations and required paperwork.', icon: <ShieldIcon className="w-8 h-8" /> },
        { title: 'Tariff Classification', description: 'Accurate classification of goods to ensure the correct duties and taxes are assessed.', icon: <SackDollarIcon /> },
        { title: 'Regulatory Compliance', description: 'Staying ahead of changing trade policies and government regulations to protect your business.', icon: <UserTieIcon className="w-8 h-8" /> },
        { title: 'Duty Drawback & Recovery', description: 'Identifying and securing opportunities for duty refunds and other cost savings.', icon: <RoadIcon /> }
      ],
      benefits: [
        { title: 'Accelerated Clearance Times', icon: <CheckCircleIcon /> },
        { title: 'Mitigation of Compliance Risks', icon: <CheckCircleIcon /> },
        { title: 'Optimized Duty & Tax Costs', icon: <CheckCircleIcon /> },
        { title: 'Seamless Integration with Freight Services', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '5',
    slug: 'warehousing-distribution',
    title: 'Warehousing & Distribution',
    icon: <WarehouseIcon />,
    shortDescription: 'Secure storage and efficient distribution to complete your supply chain.',
    pageContent: {
      heroImageSeed: 'modern-logistics-warehouse',
      introduction: 'Our global network of warehousing facilities offers more than just storage; they are strategic hubs designed to optimize your supply chain. We provide secure, flexible storage solutions and a full suite of distribution services to ensure your products are perfectly positioned and ready for market.',
      features: [
        { title: 'Secure Storage', description: 'State-of-the-art facilities with 24/7 security, advanced surveillance, and climate control options.', icon: <WarehouseIcon className="w-8 h-8" /> },
        { title: 'Inventory Management', description: 'Advanced Warehouse Management Systems (WMS) for real-time visibility and control.', icon: <BoxesPackingIcon /> },
        { title: 'Value-Added Services', description: 'Offering pick-and-pack, kitting, labeling, and other order fulfillment services.', icon: <SackDollarIcon /> },
        { title: 'Last-Mile Delivery', description: 'A fully integrated distribution network for timely and reliable delivery to the end customer.', icon: <RoadIcon /> }
      ],
      benefits: [
        { title: 'Reduced Storage & Overhead Costs', icon: <CheckCircleIcon /> },
        { title: 'Improved Inventory Accuracy', icon: <CheckCircleIcon /> },
        { title: 'Increased Supply Chain Velocity', icon: <CheckCircleIcon /> },
        { title: 'Scalable Solutions for Business Growth', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '6',
    slug: 'bulk-shipments',
    title: 'Bulk Shipments',
    icon: <BoxesStackedIcon />,
    shortDescription: 'Specialized handling and transport for bulk and break-bulk cargo.',
    pageContent: {
      heroImageSeed: 'bulk-carrier-loading-grain',
      introduction: 'We are experts in the global transportation of bulk commodities. Whether you are moving grains, minerals, or other raw materials, our dedicated bulk shipment services provide the scale, efficiency, and reliability required for this specialized cargo, ensuring safe and timely delivery worldwide.',
      features: [
        { title: 'Dry Bulk Cargo', description: 'Comprehensive solutions for materials like coal, iron ore, grain, and fertilizers.', icon: <BoxesPackingIcon /> },
        { title: 'Break-Bulk Cargo', description: 'Expert handling for oversized or non-containerized goods like machinery, steel, and timber.', icon: <SackDollarIcon /> },
        { title: 'Port & Stowage Planning', description: 'Meticulous planning for optimal vessel loading, stability, and discharge operations.', icon: <AnchorIcon className="w-8 h-8" /> },
        { title: 'Global Sourcing', description: 'Leveraging our global network to find the right vessel and route for your specific bulk needs.', icon: <GlobeIcon className="w-8 h-8"/> }
      ],
      benefits: [
        { title: 'Economies of Scale for Large Volumes', icon: <CheckCircleIcon /> },
        { title: 'Specialized Handling Expertise', icon: <CheckCircleIcon /> },
        { title: 'Reduced Risk of Cargo Damage', icon: <CheckCircleIcon /> },
        { title: 'End-to-End Logistical Management', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '7',
    slug: 'ship-management',
    title: 'Ship Management',
    icon: <GearsIcon />,
    shortDescription: 'Comprehensive technical and commercial management for vessel owners.',
    pageContent: {
      heroImageSeed: 'ship-bridge-navigation',
      introduction: 'For ship owners and investors, we offer a complete suite of ship management services designed to maximize operational efficiency and return on investment. From technical oversight to crew management and commercial operations, we act as your trusted partner, ensuring your assets are maintained and operated to the highest international standards.',
      features: [
        { title: 'Technical Management', description: 'Full oversight of vessel maintenance, repairs, dry-docking, and regulatory compliance.', icon: <GearsIcon className="w-8 h-8" /> },
        { title: 'Crew Management', description: 'Recruitment, training, and administration for highly qualified and experienced seafarers.', icon: <ShipIcon className="w-8 h-8" /> },
        { title: 'Commercial Management', description: 'Chartering, operations, and financial management to maximize vessel profitability.', icon: <UsersIcon className="w-8 h-8" /> },
        { title: 'Safety & Quality Assurance', description: 'Implementation of rigorous ISM, ISPS, and MLC compliance protocols for safe and secure operations.', icon: <UserTieIcon className="w-8 h-8" /> }
      ],
      benefits: [
        { title: 'Optimized Vessel Performance & Uptime', icon: <CheckCircleIcon /> },
        { title: 'Cost-Effective Operations', icon: <CheckCircleIcon /> },
        { title: 'Peace of Mind for Asset Owners', icon: <CheckCircleIcon /> },
        { title: 'Strict Adherence to Global Standards', icon: <CheckCircleIcon /> },
      ]
    }
  }
];

// =================================================================================
// SHIPS
// =================================================================================

export const SHIPS: Ship[] = [
  {
    id: 'mv-aurora',
    name: 'MV Aurora',
    type: 'Bulk Carrier',
    status: 'For Sale',
    yearBuilt: 2018,
    dwt: 82000,
    price: 32000000,
    imageUrl: 'https://picsum.photos/seed/panamax-bulk-carrier/800/600',
    specs: { IMO: '9876543', Built: '2018', Class: 'ABS', DWT: '82,000 MT', Dimensions: '229m x 32m' },
    description: 'A modern and well-maintained Panamax bulk carrier, the MV Aurora is equipped with the latest navigation and fuel-efficiency systems. Ideal for grain, coal, and other dry bulk commodities.'
  },
  {
    id: 'mt-neptune',
    name: 'MT Neptune',
    type: 'Tanker',
    status: 'For Sale',
    yearBuilt: 2020,
    dwt: 115000,
    price: 55000000,
    imageUrl: 'https://picsum.photos/seed/aframax-oil-tanker/800/600',
    specs: { IMO: '9123456', Built: '2020', Class: 'DNV', DWT: '115,000 MT', Dimensions: '250m x 44m' },
    description: 'The MT Neptune is a state-of-the-art Aframax tanker built for crude oil and petroleum products. Features include double-hull construction and advanced cargo handling systems.'
  },
  {
    id: 'msc-voyager',
    name: 'MSC Voyager',
    type: 'Container Ship',
    status: 'Under Offer',
    yearBuilt: 2019,
    dwt: 150000,
    price: 120000000,
    imageUrl: 'https://picsum.photos/seed/large-container-ship/800/600',
    specs: { IMO: '9654321', Built: '2019', Class: 'Lloyd\'s', DWT: '150,000 MT', 'TEU Capacity': '14,000'},
    description: 'A high-capacity container vessel, the MSC Voyager is designed for major global trade routes. It offers exceptional container intake and reefer capacity, making it a valuable asset for any liner service.'
  },
  {
    id: 'ro-ro-titan',
    name: 'Ro-Ro Titan',
    type: 'Ro-Ro',
    status: 'For Sale',
    yearBuilt: 2017,
    dwt: 25000,
    price: 45000000,
    imageUrl: 'https://picsum.photos/seed/car-carrier-ship/800/600',
    specs: { IMO: '9753186', Built: '2017', Class: 'RINA', DWT: '25,000 MT', 'Lane Meters': '4,500' },
    description: 'The Ro-Ro Titan is a versatile roll-on/roll-off vessel with multiple decks for carrying cars, trucks, and high-and-heavy cargo. Features stern and side ramps for efficient loading and unloading.'
  },
  {
    id: 'lng-polaris',
    name: 'LNG Polaris',
    type: 'LNG Carrier',
    status: 'For Sale',
    yearBuilt: 2021,
    dwt: 95000,
    price: 250000000,
    imageUrl: 'https://picsum.photos/seed/lng-gas-carrier/800/600',
    specs: { IMO: '9888777', Built: '2021', Class: 'BV', DWT: '95,000 MT', 'Capacity': '174,000 cbm' },
    description: 'A new generation LNG carrier featuring highly efficient propulsion and advanced cargo containment systems. Designed for long-haul transportation of liquefied natural gas with minimal boil-off.'
  },
  {
    id: 'mv-odyssey',
    name: 'MV Odyssey',
    type: 'General Cargo',
    status: 'Sold',
    yearBuilt: 2015,
    dwt: 12500,
    price: 15000000,
    imageUrl: 'https://picsum.photos/seed/general-cargo-vessel/800/600',
    specs: { IMO: '9555444', Built: '2015', Class: 'NKK', DWT: '12,500 MT', 'Cranes': '2 x 30T' },
    description: 'A multi-purpose general cargo vessel equipped with its own cranes, allowing for flexible loading and unloading in ports with limited infrastructure. Ideal for breakbulk, project cargo, and containers.'
  },
   {
    id: 'mt-horizon',
    name: 'MT Horizon',
    type: 'Tanker',
    status: 'For Sale',
    yearBuilt: 2016,
    dwt: 50000,
    price: 28000000,
    imageUrl: 'https://picsum.photos/seed/product-tanker-ship/800/600',
    specs: { IMO: '9444333', Built: '2016', Class: 'ABS', DWT: '50,000 MT', 'Type': 'MR2 Product Tanker' },
    description: 'An eco-design MR2 product tanker with coated tanks suitable for carrying refined petroleum products and chemicals. Features advanced fuel-saving technologies.'
  },
  {
    id: 'mv-goliath',
    name: 'MV Goliath',
    type: 'Bulk Carrier',
    status: 'Under Offer',
    yearBuilt: 2012,
    dwt: 180000,
    price: 22000000,
    imageUrl: 'https://picsum.photos/seed/capesize-bulk-carrier/800/600',
    specs: { IMO: '9333222', Built: '2012', Class: 'DNV', DWT: '180,000 MT', 'Type': 'Capesize' },
    description: 'A robust Capesize bulk carrier with a strong trading history. Well-suited for iron ore and coal routes. Passed recent special survey with excellent remarks.'
  }
];


// =================================================================================
// NEWS
// =================================================================================

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'Farco Global Expands Operations in Southeast Asia',
    excerpt: 'We are thrilled to announce the opening of our new regional headquarters in Singapore, strengthening our network and service capabilities...',
    imageUrl: 'https://picsum.photos/seed/singapore-skyline-port/600/400',
    date: 'October 26, 2023',
    category: 'Company News',
    tags: ['expansion', 'asia', 'singapore']
  },
  {
    id: '2',
    title: 'Navigating New IMO 2023 Environmental Regulations',
    excerpt: 'Our team is fully prepared to help clients navigate the complexities of the latest International Maritime Organization regulations for a greener future.',
    imageUrl: 'https://picsum.photos/seed/eco-shipping-concept/600/400',
    date: 'October 15, 2023',
    category: 'Regulations',
    tags: ['imo', 'sustainability', 'compliance']
  },
  {
    id: '3',
    title: 'Successful Brokerage of Two Supramax Vessels',
    excerpt: 'Farco Global\'s brokerage desk is pleased to confirm the successful sale and delivery of two 2015-built Supramax bulk carriers to new owners.',
    imageUrl: 'https://picsum.photos/seed/ship-handshake-deal/600/400',
    date: 'September 28, 2023',
    category: 'Market Updates',
    tags: ['brokerage', 's&p', 'bulk carrier']
  },
  {
    id: '4',
    title: 'Digital Transformation: Farco Unveils New Tracking Platform',
    excerpt: 'Our new proprietary digital platform offers clients unprecedented real-time visibility and predictive analytics for their entire supply chain.',
    imageUrl: 'https://picsum.photos/seed/logistics-dashboard-tech/600/400',
    date: 'September 05, 2023',
    category: 'Technology',
    tags: ['digitalization', 'innovation', 'supply chain']
  },
  {
    id: '5',
    title: 'Investing in Green Shipping: Our First LNG-Powered Fleet',
    excerpt: 'As part of our commitment to sustainability, we have placed an order for three new dual-fuel container ships, a major step towards decarbonization.',
    imageUrl: 'https://picsum.photos/seed/lng-powered-container-ship/600/400',
    date: 'August 21, 2023',
    category: 'Company News',
    tags: ['sustainability', 'lng', 'newbuild']
  },
  {
    id: '6',
    title: 'Farco Global Awarded "Logistics Provider of the Year"',
    excerpt: 'We are honored to be recognized by the International Shipping Review for our excellence in service, innovation, and client satisfaction.',
    imageUrl: 'https://picsum.photos/seed/shipping-award-trophy/600/400',
    date: 'July 30, 2023',
    category: 'Company News',
    tags: ['award', 'logistics']
  },
  {
    id: '7',
    title: 'Analysis: Shifting Trade Routes and Port Congestion',
    excerpt: 'A deep dive into the evolving global trade landscape and its impact on major shipping lanes and port operations worldwide.',
    imageUrl: 'https://picsum.photos/seed/port-congestion-map/600/400',
    date: 'July 12, 2023',
    category: 'Market Updates',
    tags: ['trade', 'ports', 'analysis']
  },
  {
    id: '8',
    title: 'EU ETS for Shipping: What You Need to Know',
    excerpt: 'A comprehensive guide to the upcoming European Union Emissions Trading System for the maritime sector and its implications for shipowners.',
    imageUrl: 'https://picsum.photos/seed/eu-flag-ship/600/400',
    date: 'June 25, 2023',
    category: 'Regulations',
    tags: ['eu ets', 'carbon emissions', 'compliance']
  },
  {
    id: '9',
    title: 'The Rise of AI in Voyage Optimization',
    excerpt: 'Exploring how artificial intelligence and machine learning are revolutionizing route planning, fuel efficiency, and vessel performance.',
    imageUrl: 'https://picsum.photos/seed/ai-shipping-route/600/400',
    date: 'June 08, 2023',
    category: 'Technology',
    tags: ['ai', 'optimization', 'efficiency']
  },
  {
    id: '10',
    title: 'Farco Global Partners with Green Ocean Initiative',
    excerpt: 'We are proud to announce our partnership with the Green Ocean Initiative to support marine biodiversity and ocean cleanup projects.',
    imageUrl: 'https://picsum.photos/seed/clean-ocean-turtles/600/400',
    date: 'May 22, 2023',
    category: 'Company News',
    tags: ['sustainability', 'partnership', 'csr']
  },
  {
    id: '11',
    title: 'Dry Bulk Market Outlook: Q4 2023',
    excerpt: 'Our expert analysis on the key drivers, challenges, and opportunities shaping the dry bulk shipping market for the final quarter of the year.',
    imageUrl: 'https://picsum.photos/seed/dry-bulk-market-chart/600/400',
    date: 'May 05, 2023',
    category: 'Market Updates',
    tags: ['dry bulk', 'market analysis', 'q4']
  },
  {
    id: '12',
    title: 'Implementing Advanced Cybersecurity Measures Across Our Fleet',
    excerpt: 'Farco Global completes a fleet-wide upgrade of its cybersecurity infrastructure to protect against emerging digital threats at sea.',
    imageUrl: 'https://picsum.photos/seed/ship-cybersecurity/600/400',
    date: 'April 18, 2023',
    category: 'Technology',
    tags: ['cybersecurity', 'safety', 'fleet']
  }
];


// =================================================================================
// WHY CHOOSE US
// =================================================================================

export const WHY_CHOOSE_US_ITEMS = [
    {
        icon: <GlobeIcon />,
        title: "Global Network",
        description: "Our extensive network of partners and offices in key global markets ensures seamless and reliable service worldwide."
    },
    {
        icon: <HeadsetIcon />,
        title: "24/7 Dedicated Support",
        description: "Your dedicated account manager and our operations team are available around the clock to support your business needs."
    },
    {
        icon: <UserTieIcon />,
        title: "Decades of Expertise",
        description: "With over 35 years in the industry, we have the deep knowledge required to navigate the complexities of global trade."
    },
    {
        icon: <LeafIcon />,
        title: "Sustainable Solutions",
        description: "We are committed to reducing the environmental impact of shipping through innovative and sustainable practices."
    }
];

// =================================================================================
// ABOUT PAGE - MILESTONES
// =================================================================================
export const MILESTONES = [
    { year: 1985, title: 'Company Founded', description: 'Farco Global is established as a small ship brokerage firm in London.' },
    { year: 1998, title: 'First International Office', description: 'Expanded operations with a new office in Singapore to serve the growing Asian market.' },
    { year: 2005, title: 'Freight Forwarding Division', description: 'Launched a comprehensive freight forwarding service, offering sea, air, and land solutions.' },
    { year: 2014, title: 'Acquisition of Charter Co.', description: 'Strengthened our chartering capabilities through a strategic acquisition.' },
    { year: 2022, title: 'Digital Platform Launch', description: 'Introduced a state-of-the-art digital platform for real-time tracking and supply chain management.' },
];

// =================================================================================
// TEAM MEMBERS
// =================================================================================

export const TEAM_MEMBERS = [
    {
        name: "Eleanor Vance",
        title: "Chief Executive Officer",
        imageUrl: "https://picsum.photos/seed/female-ceo-portrait/400/400"
    },
    {
        name: "Marcus Thorne",
        title: "Head of Brokerage",
        imageUrl: "https://picsum.photos/seed/male-shipping-broker/400/400"
    },
    {
        name: "Isabella Chen",
        title: "Director of Global Freight",
        imageUrl: "https://picsum.photos/seed/female-logistics-director/400/400"
    },
    {
        name: "Javier Morales",
        title: "Chief Financial Officer",
        imageUrl: "https://picsum.photos/seed/male-cfo-portrait/400/400"
    }
];

// =================================================================================
// CLIENT LOGOS (REDESIGNED)
// =================================================================================
const ClientLogo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-8 w-auto text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
        {children}
    </div>
);

export const CLIENT_LOGOS = [
    { name: "Apex Shipping Lines", component: <ClientLogo><svg role="img" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M60 0L0 40h25L60 13.3L95 40h25L60 0z"/></svg></ClientLogo> },
    { name: "Terra Bulk Carriers", component: <ClientLogo><svg role="img" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95 8.95 0 20 0h80c11.05 0 20 8.95 20 20s-8.95 20-20 20H20C8.95 40 0 31.05 0 20zm30 0h60v10H30v-10zm0-10h60v10H30V10z"/></svg></ClientLogo> },
    { name: "Nexus Brokers", component: <ClientLogo><svg role="img" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20L20 0l20 20-20 20zM80 20l20-20 20 20-20 20zM30 20h60"/></svg></ClientLogo> },
    { name: "Odyssey Shipowners", component: <ClientLogo><svg role="img" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 40a20 20 0 100-40 20 20 0 000 40zm0-10a10 10 0 100-20 10 10 0 000 20zM50 0h10v40H50zM70 0h40v10H70zM70 30h40v10H70z"/></svg></ClientLogo> },
    { name: "Meridian Energy", component: <ClientLogo><svg role="img" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 20L0 0v40zM100 20l20-20v40zM60 20c0-11.05-8.95-20-20-20s-20 8.95-20 20 8.95 20 20 20 20-8.95 20-20zm0 0c0-11.05 8.95-20 20-20s20 8.95 20 20-8.95 20-20 20-20-8.95-20-20z"/></svg></ClientLogo> },
];