export function formatAmount(amount: string | number): string {
    if (typeof amount === 'number') {
        return amount.toLocaleString('en-US', { maximumFractionDigits: 0 });
    }

    const parsedAmount = amount ? Number(amount) : undefined;
    const formattedAmount = parsedAmount !== undefined ? parsedAmount.toLocaleString() : '';
    return formattedAmount;
}
