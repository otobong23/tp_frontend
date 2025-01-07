import { showToast } from "./alert";
import api from "./axios";

// Function to get the current price of a cryptocurrency in USDT
const getCryptoToUsdtRate = async (cryptoLabel: 'ethereum' | 'bitcoin'| 'usd'): Promise<number> => {
  try {
    const response = await api.post('/user/getUsdtRate', {cryptoLabel: cryptoLabel})
    showToast('success', `${cryptoLabel} to USDT rate fetched successfully`)

    // Extract and return the USDT value
    return response.data.value || 0;
  } catch (error) {
    showToast('error', `Failed to fetch ${cryptoLabel} to USDT rate: ${error}`)
    return 0;
  }
};

export default getCryptoToUsdtRate