type FullImageProps = {
  src: string
  width: number
  height: number
  alt: string
  loading: 'eager' | 'lazy'
  className?: string
}

/** 節の中に全幅で置く画像。入れ物のクラスだけ差し替えられる（運営者情報の枠は別クラスを使う）。 */
export function FullImage({
  src,
  width,
  height,
  alt,
  loading,
  className = 'lp-image-full',
}: FullImageProps) {
  return (
    <div className={className}>
      <img src={src} width={width} height={height} alt={alt} loading={loading} />
    </div>
  )
}
