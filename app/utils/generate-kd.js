export default function generateKD(k, d) {
  if (d === 0 || k === 0) {
    return k
  }

  const kd = k / d
  return Number.isInteger(kd) ? kd : kd.toFixed(1)
}
