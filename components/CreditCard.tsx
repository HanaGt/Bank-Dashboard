import React from 'react';
import { CardProps} from '../../types'


const CreditCard: React.FC<CardProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  gradientFrom,
  gradientTo,
  chipImage,
  logoImage,
  borderStyle,
  bottomBackground,
  logoStyle,
  bottomPadding,
}) => {
  return (
    <div
      className={`flex flex-col w-[350px] h-[235px] ${borderStyle || 'text-white'}`}
    >
      <div
        className={`flex flex-col justify-between gap-6 rounded-t-3xl bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}
      >
        <div className="flex justify-between mt-6 mx-6">
          <div>
            <p className="text-sm">Balance</p>
            <p className="text-2xl font-bold">{balance}</p>
          </div>
          <img src={chipImage} alt="Chip Card" style={{ width: '35px', height: '35px' }} />
        </div>
        <div className="flex items-start space-x-8 mx-6 mb-4">
          <div>
            <p className="uppercase tracking-wider text-sm">Card Holder</p>
            <p className="uppercase tracking-wider font-semibold text-sm">{cardHolder}</p>
          </div>
          <div>
            <p className="uppercase tracking-wider text-sm">Valid Thru</p>
            <p className="uppercase tracking-wider font-semibold text-sm">{validThru}</p>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-center align-bottom ${bottomBackground || 'bg-gradient-to-br from-[rgba(76,73,237,0.8)] to-[rgba(76,73,237,1)]'} p-${bottomPadding || '6'} rounded-b-3xl`}
      >
        <div className="text-xl tracking-widest">{cardNumber}</div>
        <img src={logoImage} alt="Card Logo" style={{ height: '30px', ...logoStyle }} />
      </div>
    </div>
  );
};

export default CreditCard;
